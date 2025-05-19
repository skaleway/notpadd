"use client";

import { useTeams } from "@/hooks/use-team";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useEffect, useState } from "react";
import { Copy } from "lucide-react";

import { createInvite } from "@/actions/invite";
import { useInviteStore } from "@/store/invite";
import { useMutation } from "@tanstack/react-query";
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
import { Button } from "@workspace/ui/components/button";
import { z } from "zod";

const createInviteSchema = z.object({
  days: z.number().min(1).max(30),
});

type InviteForm = z.infer<typeof createInviteSchema>;

const Invite = () => {
  const { teamId } = useTeams();
  const { isOpen, onToggle } = useInviteStore();
  const [inviteUrl, setInviteUrl] = useState<string>("");
  const form = useForm<InviteForm>({
    resolver: zodResolver(createInviteSchema),
    defaultValues: {
      days: 7,
    },
  });

  const mutation = useMutation({
    mutationFn: (data: InviteForm) => createInvite(teamId, data.days),
    onSuccess: (data) => {
      const url = `${window.location.origin}/join/${data.code}`;
      setInviteUrl(url);
      toast.success("Invite created successfully");
      form.reset();
    },
    onError: () => {
      toast.error("Failed to create invite");
    },
  });

  useEffect(() => {
    if (teamId && isOpen) {
      mutation.mutate({ days: 7 });
    }
  }, [teamId, isOpen]);

  const onSubmit = (data: InviteForm) => {
    mutation.mutate(data);
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(inviteUrl);
      toast.success("Invitation link copied to clipboard");
    } catch (err) {
      toast.error("Failed to copy invitation link");
    }
  };

  const {
    formState: { isSubmitting },
  } = form;

  return (
    <Dialog open={isOpen} onOpenChange={onToggle}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Invite New Members</DialogTitle>
          <DialogDescription>
            Copy the invitation link and share with someone
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="grid gap-4 py-4"
          >
            <div className="flex gap-2">
              <Input
                value={inviteUrl}
                readOnly
                placeholder="Generating invite link..."
                className="flex-1"
              />
              <Button
                type="button"
                variant="outline"
                size="icon"
                onClick={copyToClipboard}
                disabled={!inviteUrl}
              >
                <Copy className="h-4 w-4" />
              </Button>
            </div>
            <FormField
              control={form.control}
              name="days"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Expiration Days</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="7"
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
                Regenerate Link
              </LoadingButton>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default Invite;
