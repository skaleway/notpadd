import { db } from "@workspace/db";
import { Button } from "@workspace/ui/components/button";

export default async function Page() {
  const user = await db.user.findFirst();
  return (
    <div className="flex items-center justify-center min-h-svh">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Hello World from web</h1>
        <Button size="sm">Button</Button>
      </div>
    </div>
  );
}
