"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { createNewNote } from "@/actions/note";
import { Button } from "@/components/ui/button";
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
import { createSpaceSchema, Space } from "@/lib/validations";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Loading } from "../loading";

const CreateNewArticle = ({
  spaceId,
  spaceKey,
}: {
  userId: string;
  spaceKey: string;
  spaceId: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const form = useForm<Space>({
    resolver: zodResolver(createSpaceSchema),
  });
  const router = useRouter();

  const {
    formState: { isSubmitting },
  } = form;

  async function onSubmit(values: Space) {
    try {
      const data = await createNewNote(values, spaceId);

      if (data === false) {
        setIsOpen(false);
        form.reset();
        toast.error(
          "You've reached your limit for a free account you might want to upgrade"
        );
        router.push("/manage/billing");
      }

      if (data) {
        toast.success(`${data.title} created`);
        setIsOpen(false);
        form.reset();
        router.push(`/manage/spaces/${spaceKey}/${data.akey}`);
      }
    } catch (error: any) {
      if (error.message) {
        return toast.error(error.message);
      }

      toast.error("Something wen wrong");
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="zbtn" className="w-fit font-semibold">
          <span className="flex items-center gap-2">
            <Plus className="w-4 h-4" />
            <span>Create article</span>
          </span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create new article</DialogTitle>
          <DialogDescription>
            Start a new article that&apos;s sync to your terminal
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
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Why i quite my 9-5 job"
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
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="My boss got on my nerves..."
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
                variant="zbtn"
                className="w-fit"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loading />
                    <span className="ml-3"> Creating article...</span>
                  </>
                ) : (
                  "Create article"
                )}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateNewArticle;
