"use client";

import { deleteArticle, updateArticle } from "@/actions/note";
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
import { Article } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { EllipsisVertical, Pen, Trash } from "lucide-react";

const ArticleCard = ({
  article,
  spaceKey,
  username,
}: {
  article: Article;
  spaceKey: string;
  username: string;
}) => {
  return (
    <div key={article?.id} className="border  rounded-lg group overflow-hidden">
      <div className="h-60 w-full relative">
        <Image
          src={article.displayImage ? article.displayImage : "/placeholder.svg"}
          className="object-cover"
          fill
          alt={`notpadd article: ${article.title}`}
        />
        <div className="absolute top-5 right-5">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button variant="ghost" size="icon">
                <EllipsisVertical className="w-4 h-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <EditArticle
                title={article.title}
                description={article?.description!}
                aKey={article.akey}
              />
              <DropdownMenuSeparator />
              <DeleteArticle
                articleKey={article.akey}
                title={article.title}
                username={username}
              />
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <Link href={`/manage/spaces/${spaceKey}/${article.akey}`}>
        <div className="flex flex-col gap-2 p-2">
          <h2 className="group-hover:underline font-semibold text-lg truncate">
            {article.title}
          </h2>
          <p>{article.description}</p>
        </div>
      </Link>
    </div>
  );
};

export default ArticleCard;

function EditArticle({
  title,
  description,
  aKey,
}: {
  title: string;
  description: string;
  aKey: string;
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
      const data = await updateArticle(values, aKey);

      if (data) {
        form.reset();

        setIsOpen(false);
        toast.success("Article updated");
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
          <Pen className="w-4 h-4" /> <span>Edit article</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit article infos</DialogTitle>
          <DialogDescription>
            Enter article information to be updated
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
                      placeholder="Enter a article name"
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
                  <FormLabel>Article description</FormLabel>
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
                  {isSubmitting ? "Updating article..." : "Update article"}
                </span>
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

function DeleteArticle({
  articleKey,
  title,
  username,
}: {
  articleKey: string;
  username: string;
  title: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const form = useForm<DeleteType>({
    resolver: zodResolver(deleteName),
  });

  const origin = useOrigin();

  const deleteText = `${origin}/${username.split(" ").join("")}`;

  async function onSubmit(values: DeleteType) {
    try {
      const data = await deleteArticle(values, articleKey);
      if (data) {
        form.reset();

        setIsOpen(false);
        toast.success("Article Delete");
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
    "The article itself",
    `It will remove it from all the instances of it running`,
  ];

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          variant="destructive"
          className="flex items-center gap-2 w-full"
        >
          <Trash className="w-4 h-4" /> <span>Delete article</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-center">
            You&apos;re about to delete {title}
          </DialogTitle>
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
                  {isSubmitting ? "Deleting article..." : "Delete article"}
                </span>
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
