"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useSignUp } from "@clerk/nextjs"
import { z } from "zod"

import { Button } from "@workspace/ui/components/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@workspace/ui/components/form"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@workspace/ui/components/input-otp"
import { toast } from "sonner"
import { redirect } from "next/navigation"

const FormSchema = z.object({
  pin: z.string().min(6, {
    message: "Your one-time password must be 6 characters.",
  }),
})

const OTP = ({ email }: { email: string }) => {
  const { isLoaded, setActive, signUp } = useSignUp()
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      pin: "",
    },
  })

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    if (!isLoaded) return
    try {
      // Submit the code that the user provides to attempt verification
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code: data.pin,
      })

      if (completeSignUp.status !== "complete") {
        console.log(JSON.stringify(completeSignUp, null, 2))
      }

      if (completeSignUp.status === "complete") {
        await setActive({ session: completeSignUp.createdSessionId })
        toast.success("User created succesfull")

        setTimeout(() => {
          redirect("/manage")
        }, 2000)
      }
    } catch (err: any) {
      const errorMessage: string = err.errors[0].message
      if (errorMessage === "expired")
        return toast.error("Your verification has expired. Create another one")
      return toast.error(errorMessage)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full flex flex-col gap-6">
        <FormField
          control={form.control}
          name="pin"
          render={({ field }) => (
            <FormItem className="flex items-center justify-center flex-col">
              <FormLabel className="text-center mb-4">
                One-Time Password was sent to {email}
              </FormLabel>
              <FormControl>
                <InputOTP maxLength={6} {...field}>
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                  </InputOTPGroup>
                  <InputOTPSeparator />
                  <InputOTPGroup>
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                  </InputOTPGroup>
                </InputOTP>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full">
          Submit
        </Button>
      </form>
    </Form>
  )
}

export default OTP
