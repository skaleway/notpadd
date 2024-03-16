import CreateNoteButton from "@/components/create-note-btn";

export default async function Home() {
  return (
    <main className="h-screen flex items-center justify-center">
      <CreateNoteButton />
    </main>
  );
}
