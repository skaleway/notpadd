"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { createSpaceSchema, Space } from "@/lib/validation";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
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
import { ReactNode, useState } from "react";

const CreateNewArticle = ({
  spaceId,
  children,
}: {
  children: ReactNode;
  spaceId: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const form = useForm<Space>({
    resolver: zodResolver(createSpaceSchema),
  });
  const router = useRouter();
  const queryClient = useQueryClient();

  const createArticle = async (data: Space) => {
    try {
      const response = await axios.post(
        `/api/v1/spaces/${spaceId}/articles`,
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
      queryClient.invalidateQueries({ queryKey: ["articles", spaceId] });
      setIsOpen(false);
      form.reset();
      router.push(`/manage/spaces/${spaceId}/${data.akey}`);
    },
    onError: (error: any) => {
      toast.error(error.message || "Something went wrong");
    },
  });

  const {
    formState: { isSubmitting },
  } = form;

  async function onSubmit(values: Space) {
    mutation.mutate(values);
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
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
                      placeholder="My boss got on my nerves..."
                      {...field}
                      disabled={isSubmitting || mutation.isPending}
                      className="disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <DialogFooter>
              <LoadingButton loading={isSubmitting || mutation.isPending}>
                Create Article
              </LoadingButton>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateNewArticle;
