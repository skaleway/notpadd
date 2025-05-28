"use client"

import { useRouter } from "next/navigation"
import React from "react"
import { z } from "zod"
import axios, { AxiosError } from "axios"
import { toast } from "sonner"
import { Form, FormControl, FormField, FormItem, FormMessage } from "@workspace/ui/components/form"
import { useForm } from "react-hook-form"
import { Input } from "@workspace/ui/components/input"
import LoadingButton from "@workspace/ui/components/loading-button"
import { useTeams } from "@/hooks/use-team"
import { useTeamStore } from "@/store/team"
import { useMutation, useQueryClient } from "@tanstack/react-query"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Team name must be at least 2 characters.",
  }),
  profilePic: z.instanceof(File).optional(),
})

type FormValues = z.infer<typeof formSchema>

const NewTeam = () => {
  const router = useRouter()
  const form = useForm<FormValues>()
  const { setTeamId } = useTeams()
  const { onClose } = useTeamStore()
  const queryClient = useQueryClient()

  const createTeamMutation = useMutation({
    mutationFn: async (values: z.infer<typeof formSchema>) => {
      const { data } = await axios.post("/api/v1/team", values)
      return data
    },
    onSuccess: data => {
      toast.success(data.message)
      setTeamId(data.team.id)
      router.push(`/t/${data.team.id}`)
      onClose()
      queryClient.invalidateQueries({ queryKey: ["teams"] })
    },
    onError: (error: AxiosError) => {
      const errorMessage = (error.response?.data as any)?.message
      toast.error(errorMessage || "Oups! Something went wrong.")
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    createTeamMutation.mutate(values)
  }

  const {
    formState: { isSubmitting },
  } = form

  return (
    <div className="!max-w-md w-full flex flex-col p-4 gap-4 items-center">
      <h1 className="text-2xl font-bold">Create a new team</h1>
      <Form {...form}>
        <form
          className="w-full flex flex-col gap-4 items-center"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input placeholder="Team name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <LoadingButton loading={isSubmitting} className="w-full">
            Create new team
          </LoadingButton>
        </form>
      </Form>
    </div>
  )
}

export default NewTeam
