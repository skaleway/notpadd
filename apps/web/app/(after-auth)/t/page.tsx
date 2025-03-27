import { auth } from "@clerk/nextjs/server";
import { db } from "@workspace/db";
import { buttonVariants } from "@workspace/ui/components/button";
import Link from "next/link";

const Teams = async () => {
  const { userId } = await auth();

  if (!userId) return;

  const teams = await db.team.findMany({
    where: {
      members: {
        some: {
          userId,
        },
      },
    },
    include: {
      members: true,
    },
  });

  return (
    <div className="min-h-screen flex justify-center py-10 w-full">
      <div className="max-w-lg w-full h-fit flex flex-col gap-4 p-4">
        <h1 className="text-2xl font-bold text-center">Teams</h1>
        <div className="flex flex-col divide-y border">
          {teams.map((team) => (
            <div
              key={team.id}
              className="flex justify-between items-center p-4"
            >
              <div>
                <h2 className="font-bold">{team.name}</h2>
                <p className="text-sm text-gray-500">
                  {team.members.length} members
                </p>
              </div>
              <Link
                className={buttonVariants({ variant: "secondary" })}
                href={`/t/${team.id}`}
              >
                View
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Teams;
