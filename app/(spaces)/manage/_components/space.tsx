import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { deleteSpace, updateSpace } from "@/actions/note";
import { Loading } from "@/components/loading";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useOrigin } from "@/hooks/use-origin";
import { cn } from "@/lib/utils";
import {
  createSpaceSchema,
  deleteName,
  DeleteType,
  Space,
} from "@/lib/validations";
import { zodResolver } from "@hookform/resolvers/zod";
import { Article, Space as SpaceType, User } from "@prisma/client";
import { EllipsisVertical, Pen, Trash } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import {
  MAX_ARTICLE_BASIC_ACCOUNT,
  MAX_ARTICLE_FREE_ACCOUNT,
} from "@/constants";

const SpaceCard = ({
  space,
  user,
}: {
  space: SpaceType & { articles: Article[] };
  user: User;
}) => {
  return (
    <Card
      x-chunk="dashboard-01-chunk-0"
      key={space.id}
      className="bg-muted dark:bg-[#232323] dark:border-neutral-700 border-muted-foreground/20 border"
    >
      <CardHeader className="flex flex-row items-center justify-between space-y-0 ">
        <Link href={`/manage/spaces/${space.key}`} className="hover:underline ">
          <CardTitle className="first-letter:capitalize font-semibold text-lg truncate">
            {space.title}
          </CardTitle>
        </Link>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button variant="ghost" size="icon">
              <EllipsisVertical className="w-4 h-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <EditSpace
              title={space.title}
              description={space?.description!}
              spaceKey={space.key}
            />
            <DropdownMenuSeparator />
            <DeleteSpace
              spaceKey={space.key}
              spaceName={space.title}
              articlesLength={space.articles.length}
            />
          </DropdownMenuContent>
        </DropdownMenu>
      </CardHeader>
      <CardDescription className="line-clamp-3">
        {space.description}
      </CardDescription>
      <div className="bg-primary-foreground border text-xs border-border h-10 w-10 flex items-center justify-center rounded-md">
        {space.articles.length}/
        {user.accounttype === "Free" && MAX_ARTICLE_FREE_ACCOUNT}
        {user.accounttype === "Basic" && MAX_ARTICLE_BASIC_ACCOUNT}
      </div>
    </Card>
  );
};

export default SpaceCard;

function EditSpace({
  title,
  spaceKey,
  description,
}: {
  title: string;
  description: string;
  spaceKey: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const form = useForm<Space>({
    resolver: zodResolver(createSpaceSchema),
    defaultValues: {
      title,
      description,
    },
  });

  async function onSubmit(values: Space) {
    try {
      //some code here
      const data = await updateSpace(values, spaceKey);

      if (data) {
        form.reset();

        setIsOpen(false);
        toast.success("Space updated");
      }
    } catch (error: any) {
      toast.error("Something happened");
      console.log(error.message);
    }
  }

  const {
    formState: { isSubmitting },
    watch,
  } = form;

  const inputedTitle = watch("title");
  const inputedDescription = watch("description");

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" className="flex items-center gap-2 w-full">
          <Pen className="w-4 h-4" /> <span>Edit space</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit space infos</DialogTitle>
          <DialogDescription>
            Enter space information to be updated
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="grid gap-4 py-4"
          >
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter a space name"
                      {...field}
                      disabled={isSubmitting}
                      className="disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Space description</FormLabel>
                  <Textarea
                    placeholder="Blogging site for my portfolio..."
                    {...field}
                    disabled={isSubmitting}
                    className="disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                  <FormMessage />
                </FormItem>
              )}
            />

            <DialogFooter>
              <Button
                type="submit"
                className="w-full"
                disabled={
                  isSubmitting ||
                  (inputedTitle.trim() === title &&
                    inputedDescription.trim() === description)
                }
              >
                {isSubmitting && <Loading />}{" "}
                <span className={cn(isSubmitting && "ml-2")}>
                  {isSubmitting ? "Updating space..." : "Update space"}
                </span>
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

function DeleteSpace({
  spaceKey,
  spaceName,
  articlesLength,
}: {
  spaceKey: string;
  spaceName: string;
  articlesLength: number;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const form = useForm<DeleteType>({
    resolver: zodResolver(deleteName),
  });

  const origin = useOrigin();

  const deleteText = `${origin}/${spaceName.split(" ").join("")}`;

  async function onSubmit(values: DeleteType) {
    try {
      const data = await deleteSpace(values, spaceKey);
      if (data) {
        form.reset();

        setIsOpen(false);
        toast.success("Space Delete");
      }
    } catch (error: any) {
      toast.error("Something happened");
      console.log(error.message);
    }
  }

  const {
    formState: { isSubmitting },
    watch,
  } = form;

  const inputValue = watch("text");

  const overview = [
    "The space itself",
    `The ${articlesLength} article${
      articlesLength > 1 ? "s" : ""
    } found in the space`,
  ];

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          variant="destructive"
          className="flex items-center gap-2 w-full"
        >
          <Trash className="w-4 h-4" /> <span>Delete space</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-center">
            You&apos;re about to delete {spaceName}
          </DialogTitle>
          http://localhost:3000/Testingtwome
          <DialogDescription>
            Confirm by typing{" "}
            <span className="text-red-500 bg-muted py-0.5 px-2 rounded select-none">
              {deleteText}
            </span>{" "}
            below
          </DialogDescription>
        </DialogHeader>
        <div className="dark:bg-rose-50/10 bg-rose-50 p-3">
          <p>This action can&apos;t be undone.</p>
          <p className="text-sm">
            Here&apos;s an overview of what will be deleted alongside.
          </p>
          <ul className="list-disc px-10">
            {overview.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="grid gap-4 py-4"
          >
            <FormField
              control={form.control}
              name="text"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="confirm Text"
                      {...field}
                      disabled={isSubmitting}
                      className="disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <DialogFooter>
              <Button
                type="submit"
                className="w-full"
                disabled={isSubmitting || inputValue !== deleteText}
              >
                {isSubmitting && <Loading />}{" "}
                <span className={cn(isSubmitting && "ml-2")}>
                  {isSubmitting ? "Deleting space..." : "Delete space"}
                </span>
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
