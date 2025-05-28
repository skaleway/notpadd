"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@workspace/ui/components/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import { Form, FormControl, FormField, FormItem } from "@workspace/ui/components/form"
import { Input } from "@workspace/ui/components/input"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useTeams } from "@/hooks/use-team"
import LoadingButton from "@workspace/ui/components/loading-button"

const formSchema = z.object({
  name: z.string().min(1),
})

const TeamName = () => {
  const { team, updateTeam, isUpdating } = useTeams()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: team?.name,
    },
  })

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    if (!team?.id) return

    updateTeam({
      teamId: team.id,
      data: {
        name: data.name,
      },
    })
  }

  return (
    <Card className="flex flex-col p-0">
      <CardHeader className="p-6">
        <CardTitle>Team Name</CardTitle>
        <CardDescription>The name of your team. This is used to identify your team</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
          </form>
        </Form>
      </CardContent>
      <CardFooter className="border-t pt-6 flex justify-end">
        <LoadingButton
          loading={isUpdating}
          className="max-w-40"
          type="submit"
          onClick={form.handleSubmit(onSubmit)}
        >
          Save
        </LoadingButton>
      </CardFooter>
    </Card>
  )
}

export default TeamName
