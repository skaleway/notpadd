"use client";
import * as Clerk from "@clerk/elements/common";
import * as SignIn from "@clerk/elements/sign-in";
import { Button } from "@workspace/ui/components/button";
import { Icons } from "@workspace/ui/components/icons";
import { Input } from "@workspace/ui/components/input";
import { Label } from "@workspace/ui/components/label";

export default function SignInForm() {
  return (
    <div className="grid w-full grow items-center px-4 sm:justify-center">
      <SignIn.Root>
        <Clerk.Loading>
          {(isGlobalLoading) => (
            <>
              <SignIn.Step name="start">
                <div className="w-full sm:w-96 flex flex-col gap-y-4">
                  <div className="flex flex-col gap-y-2">
                    <h2 className="text-2xl font-bold font-lora">
                      Sign in to Notpadd
                    </h2>
                    <p className="text-sm text-muted-foreground">
                      Welcome back! Please sign in to continue
                    </p>
                  </div>
                  <div className="grid gap-y-4">
                    <div className="grid grid-cols-2 gap-x-4">
                      <Clerk.Connection name="github" asChild>
                        <Button
                          size="sm"
                          type="button"
                          disabled={isGlobalLoading}
                        >
                          <Clerk.Loading scope="provider:github">
                            {(isLoading) =>
                              isLoading ? (
                                <Icons.Loading className="size-4 animate-spin" />
                              ) : (
                                <>
                                  <Icons.GitHub className="mr-2 size-4" />
                                  GitHub
                                </>
                              )
                            }
                          </Clerk.Loading>
                        </Button>
                      </Clerk.Connection>
                      <Clerk.Connection name="google" asChild>
                        <Button
                          size="sm"
                          type="button"
                          disabled={isGlobalLoading}
                        >
                          <Clerk.Loading scope="provider:google">
                            {(isLoading) =>
                              isLoading ? (
                                <Icons.Loading className="size-4 animate-spin" />
                              ) : (
                                <>
                                  <Icons.Google className="mr-2 size-4" />
                                  Google
                                </>
                              )
                            }
                          </Clerk.Loading>
                        </Button>
                      </Clerk.Connection>
                    </div>
                    <p className="flex items-center gap-x-3 text-sm text-muted-foreground before:h-px before:flex-1 before:bg-border after:h-px after:flex-1 after:bg-border font-lora">
                      or continue with email
                    </p>
                    <Clerk.Field name="identifier" className="space-y-2">
                      <Clerk.Label asChild>
                        <Label className="font-lora">Email address</Label>
                      </Clerk.Label>
                      <Clerk.Input type="email" required asChild>
                        <Input className="bg-muted/50 outline-none" />
                      </Clerk.Input>
                      <Clerk.FieldError className="block text-sm text-destructive" />
                    </Clerk.Field>
                  </div>
                  <div className="grid w-full gap-y-4">
                    <SignIn.Action submit asChild>
                      <Button disabled={isGlobalLoading}>
                        <Clerk.Loading>
                          {(isLoading) => {
                            return isLoading ? (
                              <Icons.Loading className="size-4 animate-spin" />
                            ) : (
                              "Continue"
                            );
                          }}
                        </Clerk.Loading>
                      </Button>
                    </SignIn.Action>

                    <Clerk.Link navigate="sign-up" className="text-start group">
                      New to Notpadd?{" "}
                      <span className="text-blue-500  group-hover:underline font-lora">
                        Sign up
                      </span>
                    </Clerk.Link>
                  </div>
                </div>
              </SignIn.Step>

              <SignIn.Step name="choose-strategy">
                <div className="w-full sm:w-96 flex flex-col gap-y-4">
                  <div className="flex flex-col gap-y-2">
                    <h2 className="text-2xl font-bold font-lora">
                      Use another method
                    </h2>
                    <p className="text-sm text-muted-foreground">
                      Facing issues? You can use any of these methods to sign
                      in.
                    </p>
                  </div>
                  <div className="grid gap-y-4">
                    <SignIn.SupportedStrategy name="email_code" asChild>
                      <Button
                        type="button"
                        variant="link"
                        disabled={isGlobalLoading}
                      >
                        Email code
                      </Button>
                    </SignIn.SupportedStrategy>
                    <SignIn.SupportedStrategy name="password" asChild>
                      <Button
                        type="button"
                        variant="link"
                        disabled={isGlobalLoading}
                      >
                        Password
                      </Button>
                    </SignIn.SupportedStrategy>
                  </div>
                  <div className="grid w-full gap-y-4">
                    <SignIn.Action navigate="previous" asChild>
                      <Button disabled={isGlobalLoading}>
                        <Clerk.Loading>
                          {(isLoading) => {
                            return isLoading ? (
                              <Icons.Loading className="size-4 animate-spin" />
                            ) : (
                              "Go back"
                            );
                          }}
                        </Clerk.Loading>
                      </Button>
                    </SignIn.Action>
                  </div>
                </div>
              </SignIn.Step>

              <SignIn.Step name="verifications">
                <SignIn.Strategy name="password">
                  <div className="w-full sm:w-96 flex flex-col gap-y-4">
                    <div className="flex flex-col gap-y-2">
                      <h2 className="text-2xl font-bold font-lora">
                        Check your email
                      </h2>
                      <p className="text-sm text-muted-foreground">
                        Enter the verification code sent to your email
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Welcome back <SignIn.SafeIdentifier />
                      </p>
                    </div>
                    <div className="grid gap-y-4">
                      <Clerk.Field name="password" className="space-y-2">
                        <Clerk.Label asChild>
                          <Label className="font-lora">Password</Label>
                        </Clerk.Label>
                        <Clerk.Input type="password" asChild>
                          <Input className="bg-muted/50 outline-none" />
                        </Clerk.Input>
                        <Clerk.FieldError className="block text-sm text-destructive" />
                      </Clerk.Field>
                    </div>
                    <div className="grid w-full gap-y-4">
                      <SignIn.Action submit asChild>
                        <Button disabled={isGlobalLoading}>
                          <Clerk.Loading>
                            {(isLoading) => {
                              return isLoading ? (
                                <Icons.Loading className="size-4 animate-spin" />
                              ) : (
                                "Continue"
                              );
                            }}
                          </Clerk.Loading>
                        </Button>
                      </SignIn.Action>
                      <SignIn.Action navigate="choose-strategy" asChild>
                        <Button type="button" size="sm" variant="link">
                          Use another method
                        </Button>
                      </SignIn.Action>
                    </div>
                  </div>
                </SignIn.Strategy>

                <SignIn.Strategy name="email_code">
                  <div className="w-full sm:w-96 flex flex-col gap-y-4">
                    <div className="flex flex-col gap-y-2">
                      <h2 className="text-2xl font-bold font-lora">
                        Check your email
                      </h2>
                      <p className="text-sm text-muted-foreground">
                        Enter the verification code sent to your email
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Welcome back <SignIn.SafeIdentifier />
                      </p>
                    </div>
                    <div className="grid gap-y-4">
                      <Clerk.Field name="code">
                        <Clerk.Label className="sr-only">
                          Email verification code
                        </Clerk.Label>
                        <div className="grid gap-y-2 items-center justify-center">
                          <div className="flex justify-center text-center">
                            <Clerk.Input
                              type="otp"
                              autoSubmit
                              className="flex justify-center has-[:disabled]:opacity-50"
                              render={({ value, status }) => {
                                return (
                                  <div
                                    data-status={status}
                                    className="relative flex h-9 w-9 items-center justify-center border-y border-r border-input text-sm shadow-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md data-[status=selected]:ring-1 data-[status=selected]:ring-ring data-[status=cursor]:ring-1 data-[status=cursor]:ring-ring"
                                  >
                                    {value}
                                  </div>
                                );
                              }}
                            />
                          </div>
                          <Clerk.FieldError className="block text-sm text-destructive text-center" />
                          <SignIn.Action
                            asChild
                            resend
                            className="text-muted-foreground"
                            fallback={({ resendableAfter }) => (
                              <Button variant="link" size="sm" disabled>
                                Didn&apos;t receive a code? Resend (
                                <span className="tabular-nums">
                                  {resendableAfter}
                                </span>
                                )
                              </Button>
                            )}
                          >
                            <Button variant="link" size="sm">
                              Didn&apos;t receive a code? Resend
                            </Button>
                          </SignIn.Action>
                        </div>
                      </Clerk.Field>
                    </div>
                    <div className="grid w-full gap-y-4">
                      <SignIn.Action submit asChild>
                        <Button disabled={isGlobalLoading}>
                          <Clerk.Loading>
                            {(isLoading) => {
                              return isLoading ? (
                                <Icons.Loading className="size-4 animate-spin" />
                              ) : (
                                "Continue"
                              );
                            }}
                          </Clerk.Loading>
                        </Button>
                      </SignIn.Action>
                      <SignIn.Action navigate="choose-strategy" asChild>
                        <Button size="sm" variant="link">
                          Use another method
                        </Button>
                      </SignIn.Action>
                    </div>
                  </div>
                </SignIn.Strategy>
              </SignIn.Step>
            </>
          )}
        </Clerk.Loading>
      </SignIn.Root>
    </div>
  );
}
