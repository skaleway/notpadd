import { tryCatch } from "@/lib/try-catch";
import { db } from "@workspace/db";
import { Metadata } from "next";
import { notFound } from "next/navigation";

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
  const { data, error } = await tryCatch(getTeamFromParams({ params }));

  if (error) notFound();

  return (
    <div className="flex items-center justify-center">
      <div className="max-w-3xl min-h-96 w-full border border-dashed rounded-lg"></div>
    </div>
  );
};

export default TeamPage;
