"use client"

import { updateSpace } from "@/actions/space"
import { tryCatch } from "@/lib/try-catch"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation } from "@tanstack/react-query"
import { Space } from "@workspace/db"
import { Button } from "@workspace/ui/components/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@workspace/ui/components/form"
import { Input } from "@workspace/ui/components/input"
import LoadingButton from "@workspace/ui/components/loading-button"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"

const formSchema = z.object({
  githubToken: z.string().min(2, {
    message: "Github token must be at least 2 characters.",
  }),
  githubRepo: z.string().min(2, {
    message: "Github repo must be at least 2 characters.",
  }),
  githubUsername: z.string().min(2, {
    message: "Github username must be at least 2 characters.",
  }),
})

export type FormValues = z.infer<typeof formSchema>

const KeysForm = ({ space }: { space: Space }) => {
  const router = useRouter()
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      githubToken: space.ghFinedGrainedToken ?? "",
      githubRepo: space.ghRepository ?? "",
      githubUsername: space.ghUsername ?? "",
    },
  })

  const { mutate: updateSpaceMutation, isPending } = useMutation({
    mutationFn: async (data: FormValues) => {
      if (!space) throw new Error("Space ID not found")
      const { data: updatedSpace, error } = await tryCatch(updateSpace(data, space.id))
      return updatedSpace
    },
    onSuccess: () => {
      toast.success("Space updated")
    },
    onError: () => {
      toast.error("Failed to update space")
    },
  })

  const onSubmit = (data: FormValues) => {
    updateSpaceMutation(data)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="githubUsername"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Github Username</FormLabel>
              <FormControl>
                <Input {...field} disabled={isPending} />
              </FormControl>
              <FormDescription>
                This is the username of the Github repository you want to connect to your Notpadd
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="githubRepo"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Github Repository</FormLabel>
              <FormControl>
                <Input {...field} disabled={isPending} />
              </FormControl>
              <FormDescription>
                This is the repository you want to connect to your Notpadd.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="githubToken"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Github Token</FormLabel>
              <FormControl>
                <Input {...field} disabled={isPending} />
              </FormControl>
              <FormDescription>
                This is the token you need to use to connect your Github repository to your Notpadd
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex justify-end gap-2">
          <Button
            variant="destructive"
            className="w-full"
            disabled={isPending}
            onClick={() => {}}
            type="button"
          >
            Revoke
          </Button>
          <LoadingButton type="submit" loading={isPending}>
            Update
          </LoadingButton>
        </div>
      </form>
    </Form>
  )
}

export default KeysForm
