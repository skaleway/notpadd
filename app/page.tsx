import CreateNoteButton from "@/components/create-note-btn";
import { getCurrentUser } from "@/lib/current-user";

export default async function Home() {
  const user = await getCurrentUser()

  // console.log(user);
  
  return (
    <main className="h-screen flex items-center justify-center">
      <CreateNoteButton userId={user?.id!} />
    </main>
  );
}
