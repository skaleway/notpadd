"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { useTeams } from "@/hooks/use-team";
import { createSpaceSchema, Space } from "@/lib/validation";
import { useSpaceModal } from "@/store/space";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@workspace/ui/components/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@workspace/ui/components/form";
import { Input } from "@workspace/ui/components/input";
import LoadingButton from "@workspace/ui/components/loading-button";
import { Textarea } from "@workspace/ui/components/textarea";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@workspace/ui/components/sheet";
import { ReactNode, useState } from "react";
import { Article } from "@workspace/db";

const ArticleMetadata = ({
  article,
  children,
}: {
  article: Article;
  children: ReactNode;
}) => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const form = useForm<z.infer<typeof createSpaceSchema>>({
    defaultValues: {
      title: article.title,
      description: article.description as string,
    },
    resolver: zodResolver(createSpaceSchema),
  });

  const {
    formState: { isSubmitting },
  } = form;

  const createArticle = async (data: Space) => {
    try {
      const response = await axios.post(
        `/api/v1/spaces/${article.id}/articles`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch (error: any) {
      throw new Error(
        error.response?.data?.message || "Failed to create article"
      );
    }
  };

  const mutation = useMutation({
    mutationFn: createArticle,
    onSuccess: (data) => {
      toast.success(`${data.title} created`);
      queryClient.invalidateQueries({ queryKey: ["articles", article.id] });
      setOpen(false);
      form.reset();
      router.push(`/manage/spaces/${article.id}/${data.akey}`);
    },
    onError: (error: any) => {
      toast.error(error.message || "Something went wrong");
    },
  });

  async function onSubmit(values: Space) {
    mutation.mutate(values);
  }
  const queryClient = useQueryClient();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="w-[700px] sm:!w-[700px]">
        <SheetHeader>
          <SheetTitle>Edit article</SheetTitle>
          <SheetDescription>Make changes to the article.</SheetDescription>
        </SheetHeader>
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
                      placeholder="Why I quit my 9-5 job"
                      {...field}
                      disabled={isSubmitting || mutation.isPending}
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
                      {...field}
                      placeholder="Because my boss was getting on my nevers..."
                      disabled={isSubmitting || mutation.isPending}
                      className="disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <SheetFooter>
              <LoadingButton
                loading={isSubmitting || mutation.isPending}
                type="submit"
              >
                Save changes
              </LoadingButton>
            </SheetFooter>
          </form>
        </Form>
      </SheetContent>
    </Sheet>
  );
};

export default ArticleMetadata;
