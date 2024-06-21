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
import { redirect } from "next/navigation";
import { Loading } from "../loading";

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

  const {
    formState: { isSubmitting },
  } = form;

  async function onSubmit(data: z.infer<typeof createProjectSchema>) {
    // console.log("something is going on");

    const promise = createNewNote(
      userId,
      projectId,
      data.title,
      data.description
    );

    toast.promise(promise, {
      loading: "Creating a new article...",
      success: (article) => {
        if (article?.id) {
          setIsOpen(false);
          form.reset();
        }

        return "New article created!";
      },
      error: "Failed to create a new article.",
    });
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="zbtn" className="w-fit">
          Create new article
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
                    <span className="ml-3"> Creating...</span>
                  </>
                ) : (
                  "Create new article"
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
