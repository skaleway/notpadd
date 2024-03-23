import CreateNoteButton from "@/components/create-note-btn";
import { getCurrentUser } from "@/lib/current-user";
import { SignInButton, auth } from "@clerk/nextjs";

export default async function Home() {
  const user = await getCurrentUser();

  return (
    <main className="h-screen flex items-center justify-center">
      <SignInButton mode="modal" afterSignInUrl="/" />
      <CreateNoteButton userId={user?.id!} />
    </main>
  );
}
