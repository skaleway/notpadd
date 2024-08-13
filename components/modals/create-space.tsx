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
import { createSpaceSchema, Space } from "@/lib/validations";
import { Textarea } from "@/components/ui/textarea";
import { createNewSpace } from "@/actions/note";
import { Loading } from "../loading";
import { cn } from "@/lib/utils";
import { useSpaceModal } from "@/hooks/use-space-modal";
import { useRouter } from "next/navigation";

const CreateNewSpace = () => {
  const { isOpen, onClose } = useSpaceModal();
  const router = useRouter();
  const form = useForm<z.infer<typeof createSpaceSchema>>({
    resolver: zodResolver(createSpaceSchema),
  });

  async function onSubmit(values: Space) {
    // console.log("something is going on");

    try {
      const data = await createNewSpace(values);

      if (data === false) {
        onClose();
        form.reset();
        toast.error(
          "You've reached your limit for a free account you might want to upgrade"
        );
        router.push("/manage/billing");
      }

      if (data) {
        toast.success(`${data.title} created`);
        onClose();
        form.reset();
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  }

  const {
    formState: { isSubmitting },
  } = form;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create new space</DialogTitle>
          <DialogDescription>
            Start a new space that&apos;s sync to your terminal
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
                      placeholder="e.g 'My personal portfolio'"
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
                      placeholder="e.g. 'Blogging site for my portfolio'"
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
                {isSubmitting && <Loading />}{" "}
                <span className={cn(isSubmitting && "ml-2")}>
                  {isSubmitting ? "Creating space..." : "Create space"}
                </span>
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateNewSpace;
