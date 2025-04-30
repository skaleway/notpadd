import { useTeams } from "@/hooks/use-team";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

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
import { z } from "zod";

const createInviteSchema = z.object({
  days: z.nativeEnum(Days),
});

type InviteForm = z.infer<typeof createInviteSchema>;

const Invite = () => {
  const { teamId } = useTeams();
  const { isOpen, onToggle } = useInviteStore();
  const form = useForm<InviteForm>({
    resolver: zodResolver(createInviteSchema),
    defaultValues: {
      days: 7,
    },
  });

  const mutation = useMutation({
    mutationFn: (data: InviteForm) => createInvite(teamId, data.days),
    onSuccess: () => {
      toast.success("Invite created successfully");
      form.reset();
      onToggle();
    },
    onError: () => {
      toast.error("Failed to create invite");
    },
  });

  const onSubmit = (data: InviteForm) => {
    mutation.mutate(data);
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

export default Invite;
