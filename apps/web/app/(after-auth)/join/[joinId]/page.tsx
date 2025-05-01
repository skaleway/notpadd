import { getCurrentUser } from "@/lib/current-user";
import { auth } from "@clerk/nextjs/server";
import { db } from "@workspace/db";
import { redirect } from "next/navigation";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ joinId: string }>;
};

const JoinPage = async ({ params }: Props) => {
  const { joinId } = await params;
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  const user = await getCurrentUser();

  if (!user) {
    redirect("/sign-in");
  }

  const invite = await db.invite.findFirst({
    where: {
      code: joinId,
      validDate: {
        gte: new Date(),
      },
      used: false,
    },
    include: {
      team: {
        include: {
          members: true,
        },
      },
    },
  });

  if (!invite) {
    return notFound();
  }

  const { team } = invite;

  if (team.members.some((member) => member.userId === user.id)) {
    redirect(`/t/${team.id}`);
  }

  await db.$transaction(async (tx) => {
    tx.member.create({
      data: {
        teamId: team.id,
        userId: user.id,
        role: "Member",
      },
    });

    tx.invite.update({
      where: {
        id: invite.id,
      },
      data: {
        used: true,
      },
    });
  });

  redirect(`/t/${team.id}`);
};

export default JoinPage;
