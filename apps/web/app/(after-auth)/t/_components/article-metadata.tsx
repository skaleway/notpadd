"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { createSpaceSchema, Space } from "@/lib/validation";
import { useMutation, useQueryClient } from "@tanstack/react-query";
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
import { usePathname, useRouter } from "next/navigation";
import { toast } from "sonner";

import { Article } from "@workspace/db";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@workspace/ui/components/sheet";
import { ReactNode, useEffect, useState } from "react";
import { useTeams } from "@/hooks/use-team";
import DropZone from "@/components/dropzone";
const ArticleMetadata = ({
  article,
  children,
}: {
  article: Article;
  children: ReactNode;
}) => {
  const [open, setOpen] = useState(false);
  const [isDirty, setIsDirty] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const form = useForm<z.infer<typeof createSpaceSchema>>({
    defaultValues: {
      title: article.title,
      description: article.description as string,
    },
    resolver: zodResolver(createSpaceSchema),
  });
  const { teamId } = useTeams();

  const spaceId = pathname.split("/")[3];

  const {
    formState: { isSubmitting, dirtyFields },
    watch,
  } = form;

  const updateArticle = async (data: Space) => {
    try {
      const response = await axios.put(
        `/api/v1/spaces/${spaceId}/articles/${article.slug}`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data as Article;
    } catch (error: any) {
      throw new Error(
        error.response?.data?.message || "Failed to create article"
      );
    }
  };

  const mutation = useMutation({
    mutationFn: updateArticle,
    onSuccess: (data) => {
      router.push(`/t/${teamId}/${spaceId}/${data.slug}`);
      queryClient.invalidateQueries({ queryKey: ["articles", article.id] });
      setOpen(false);
      form.reset();
      setIsDirty(false);
      toast.success("Article updated successfully");
      router.refresh();
    },
    onError: (error: any) => {
      toast.error(error.message || "Something went wrong");
    },
  });

  async function onSubmit(values: Space) {
    mutation.mutate(values);
  }
  const queryClient = useQueryClient();
  useEffect(() => {
    const subscription = watch((value, { name }) => {
      setIsDirty(!!dirtyFields.title || !!dirtyFields.description);
    });
    return () => subscription.unsubscribe();
  }, [watch, dirtyFields]);

  const handleOpenChange = (newOpen: boolean) => {
    if (!newOpen && isDirty) {
      const confirmClose = window.confirm(
        "You have unsaved changes. Are you sure you want to close?"
      );
      if (!confirmClose) return;
    }
    setOpen(newOpen);
  };

  return (
    <Sheet open={open} onOpenChange={handleOpenChange}>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="w-[700px] sm:!w-[700px] flex flex-col gap-4">
        <SheetHeader>
          <SheetTitle>Edit article</SheetTitle>
          <SheetDescription>Make changes to the article.</SheetDescription>
        </SheetHeader>
        <DropZone
          spaceId={spaceId as string}
          slug={article.slug}
          previewImage={article.previewImage}
        />
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4">
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
