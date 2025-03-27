import { tryCatch } from "@/lib/try-catch";
import { db } from "@workspace/db";
import { Badge } from "@workspace/ui/components/badge";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";

type Props = {
  params: Promise<{ teamId: string }>;
};

async function getTeamFromParams({ params }: Props) {
  const { teamId } = await params;

  const team = await db.team.findFirst({
    where: {
      id: teamId,
    },
  });

  if (!team) return null;

  return team;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const team = await getTeamFromParams({ params });

  if (!team) {
    return {};
  }

  return {
    title: team.name,
    description: "",
    openGraph: {
      title: team.name,
      description: "Nothing",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: team.name,
      description: "",
      creator: "@bossadizenith",
    },
  };
}

const TeamPage = async ({ params }: Props) => {
  const { teamId } = await params;
  const { data, error } = await tryCatch(getTeamFromParams({ params }));

  if (error) return notFound();

  return (
    <div className="flex items-center justify-center">
      <Suspense fallback={<div>Loading...</div>}>
        <Spaces teamId={teamId} />
      </Suspense>
    </div>
  );
};

const Spaces = async ({ teamId }: { teamId: string }) => {
  const spaces = await db.space.findMany({
    where: {
      teamId,
    },
    include: {
      articles: {
        select: {
          id: true,
        },
      },
    },
  });

  return (
    <div className="w-full">
      {spaces.length === 0 && (
        <div className="max-w-5xl border border-dashed h-96"></div>
      )}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
        {spaces.map((space) => (
          <div
            key={space.id}
            className="border rounded-md shadow bg-background p-4"
          >
            <h2>{space.name}</h2>
            <p>{space.description}</p>
            <div className="mt-4 flex items-center justify-end">
              <Badge variant="outline" className="rounded-md">
                {space.articles.length} articles
              </Badge>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamPage;
