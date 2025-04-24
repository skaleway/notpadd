import { db } from "@workspace/db";
import { Button } from "@workspace/ui/components/button";
import { allContents } from "notpadd-data";

export default async function Page() {
  const user = await db.user.findFirst();

  if (!user) return <div>No user found</div>;
  return (
    <div className="flex items-center justify-center min-h-svh">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Hello World from web</h1>
        <Button size="sm">Button</Button>
        {allContents.map((content) => (
          <div key={content.slug}>{content.title}</div>
        ))}
        {user?.name}
      </div>
    </div>
  );
}
