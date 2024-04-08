"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

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
  FormMessage,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { createProjectSchema } from "@/lib/validations";
import { Textarea } from "@/components/ui/textarea";
import { createNewNote } from "@/actions/note";
import { useState } from "react";

const CreateNewArticle = ({
  userId,
  projectId,
}: {
  userId: string;
  projectId: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const form = useForm<z.infer<typeof createProjectSchema>>({
    resolver: zodResolver(createProjectSchema),
  });

  async function onSubmit(data: z.infer<typeof createProjectSchema>) {
    console.log("something is going on");

    const promise = createNewNote(
      userId,
      projectId,
      data.title,
      data.description
    );

    toast.promise(promise, {
      loading: "Creating a new article...",
      success: (project) => {
        if (project?.id) {
          setIsOpen(false);
          data.description = "";
          data.title = "";
        }

        return "New article created!";
      },
      error: "Failed to create a new article.",
    });
  }

  const {
    formState: { isSubmitting },
  } = form;

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button>Create new article</Button>
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
                      placeholder="blog"
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
                      placeholder="Blogging site for my portfolio..."
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
              <Button type="submit">Create project</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateNewArticle;
