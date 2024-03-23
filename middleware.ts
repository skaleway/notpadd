import { authMiddleware, redirectToSignIn } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export default authMiddleware({
  afterAuth(auth, req, evt) {
    // handle users who aren't authenticated
    if (!auth.userId && !auth.isPublicRoute) {
      return redirectToSignIn({ returnBackUrl: req.url });
    }
  },

  publicRoutes: ["/api/uploadthing", "/api/:path*"],
  ignoredRoutes: ["/api/uploadthing"],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
