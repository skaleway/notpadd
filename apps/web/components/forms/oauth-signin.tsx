"use client";

import { GitHub, Google, Loading } from "@workspace/ui/components/icons";
import { toast } from "sonner";
import { useSignIn } from "@clerk/nextjs";
import type { OAuthStrategy } from "@clerk/types";
import * as React from "react";
import { OAuthButton } from "./oauth-button";

export function OAuthSignIn() {
  const [isLoading, setIsLoading] = React.useState<OAuthStrategy | null>(null);
  const { signIn, isLoaded: signInLoaded } = useSignIn();

  const oauthSignIn = async (provider: OAuthStrategy) => {
    if (!signInLoaded) {
      return null;
    }
    try {
      setIsLoading(provider);
      await signIn.authenticateWithRedirect({
        strategy: provider,
        redirectUrl: "/sso-callback",
        redirectUrlComplete: "/manage/spaces",
      });
    } catch (err) {
      console.error(err);
      setIsLoading(null);
      toast.error((err as Error).message);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <OAuthButton onClick={() => oauthSignIn("oauth_github")}>
        {isLoading === "oauth_github" ? (
          <Loading className="w-6 h-6" />
        ) : (
          <GitHub className="w-6 h-6" />
        )}
        GitHub
      </OAuthButton>
      <OAuthButton onClick={() => oauthSignIn("oauth_google")}>
        {isLoading === "oauth_google" ? (
          <Loading className="w-6 h-6" />
        ) : (
          <Google className="w-6 h-6" />
        )}
        Google
      </OAuthButton>
    </div>
  );
}
