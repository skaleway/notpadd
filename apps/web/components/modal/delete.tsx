import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@workspace/ui/components/dialog"
import { useDelete, deleteHeaders } from "@/hooks/use-delete"
import { Button } from "@workspace/ui/components/button"
import LoadingButton from "@workspace/ui/components/loading-button"
import { AlertTriangle } from "lucide-react"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@workspace/ui/components/form"
import { Input } from "@workspace/ui/components/input"
import { toast } from "sonner"
import { useRouter } from "next/navigation"

const deleteSchema = z.object({
  name: z.string().min(4, "Name must be at least 4 characters"),
})

const Delete = () => {
  const { isOpen, tDelete, isLoading, setIsOpen, data, setIsLoading } = useDelete()
  const router = useRouter()

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      setIsOpen(false)
      form.reset()
    }
  }

  const form = useForm<z.infer<typeof deleteSchema>>({
    resolver: zodResolver(deleteSchema),
    defaultValues: {
      name: "",
    },
  })

  if (!tDelete || !deleteHeaders[tDelete]) return null

  const handleDelete = async () => {
    try {
      setIsLoading(true)
      const response = await fetch(`${deleteHeaders[tDelete].api}/${data.id}`, {
        method: "DELETE",
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.message || "Failed to delete")
      }

      toast.success(result.message || "Deleted successfully")
      router.refresh()
      return true
    } catch (error: any) {
      toast.error(error.message || "Something went wrong")
      return false
    } finally {
      setIsLoading(false)
    }
  }

  const onSubmit = async (formData: z.infer<typeof deleteSchema>) => {
    if (formData.name !== data.name) {
      form.setError("name", {
        message: "The name doesn't match. Please try again.",
      })
      toast.error("The name doesn't match")
      return
    }

    const success = await handleDelete()
    if (success) {
      form.reset()
      if (tDelete === "team") {
        router.push("/t")
      }
      setIsOpen(false)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{deleteHeaders[tDelete].title}</DialogTitle>
          <DialogDescription>{deleteHeaders[tDelete].description}</DialogDescription>
        </DialogHeader>
        <div className="bg-destructive/10 p-2 rounded-lg">
          <p className="text-destructive text-sm flex items-center gap-2">
            <AlertTriangle className="size-4" />{" "}
            <span className="font-bold">This action is not reversible.</span> Please be certain.
          </p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Please type <span className="font-bold">{data.name}</span> to confirm
                  </FormLabel>
                  <FormControl>
                    <Input placeholder={data.name} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-end gap-2">
              <Button
                type="button"
                variant="outline"
                onClick={() => {
                  setIsOpen(false)
                  form.reset()
                }}
              >
                Cancel
              </Button>
              <LoadingButton type="submit" variant="destructive" loading={isLoading}>
                {deleteHeaders[tDelete].buttonText}
              </LoadingButton>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}

export default Delete
