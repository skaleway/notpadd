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
} from "@/components/ui/form";
import { feedbackSchema, feedbackSchemaType } from "@/lib/validations";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Footprints } from "lucide-react";
import { createNewFeedBack } from "@/actions/feedback";
import { Loading } from "../loading";

const Feedback = () => {
  const [isOpen, setIsOpen] = useState(false);
  const form = useForm<feedbackSchemaType>({
    resolver: zodResolver(feedbackSchema),
  });

  async function onSubmit(values: feedbackSchemaType) {
    try {
      const data = await createNewFeedBack(values);

      if (data) {
        setIsOpen(false);
        form.reset();

        toast.success("😊 Thanks for your feedback we'll work on that.");
      }
    } catch (error: any) {
      if (error.message) return toast.error(error.message);

      toast.error("Something went wrong");
    }
  }

  const {
    formState: { isSubmitting, isValid },
  } = form;

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <div
          className={cn(
            "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary cursor-pointer"
          )}
        >
          <Footprints className="h-4 w-4" />
          <span className="text-lg font-semibold">Feedback</span>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader className="text-center">
          <DialogTitle className="text-center text-3xl">
            Leave feedback
          </DialogTitle>
          <DialogDescription className="text-center">
            We&apos;d love to hear what went well or how we can improve the
            product experience.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="grid gap-4 py-4"
          >
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      placeholder="What if..."
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
                variant="zbtn"
                disabled={isSubmitting || !isValid}
              >
                {isSubmitting && <Loading />}{" "}
                <span className={cn(isSubmitting && "ml-2")}>
                  {isSubmitting ? "Submitting..." : "Submit"}
                </span>
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default Feedback;
