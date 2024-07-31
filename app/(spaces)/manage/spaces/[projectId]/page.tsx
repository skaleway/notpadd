import { getSingleSpace } from "@/actions/note";
import CodeBlock from "@/components/code-block";
import { getCurrentUser } from "@/lib/current-user";
import { Metadata } from "next";
import React from "react";
import Blogs from "./_components/blogs";
import UserNotFound from "@/components/not-found/user";

type Props = {
  params: { spaceId: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const user = await getCurrentUser();

  if (!user)
    return {
      title: "User not found",
    };

  const space = await getSingleSpace(user?.id, params.spaceId);

  if (!space)
    return {
      title: "Not found",
    };

  const title = space.title.charAt(0).toUpperCase() + space.title.slice(1);

  return {
    title: title,
  };
}

const SingleSpace = async ({ params }: { params: { spaceId: string } }) => {
  const user = await getCurrentUser();

  if (!user) return <UserNotFound />;

  // const singleSpace = await getSingleSpace(user.id, params.spaceId);

  // console.log(singleSpace);

  const code = `
  // this values should be used wisely
  next_notpadd_userId=${user.userId}
  next_notpadd_spaceId=${params.spaceId}
  // Uncomment these lines if you need to send these headers
  // get_all_articles: "True",
  // get_only_private_articles: "",
  get_only_public_articles: "True",`;

  return (
    <div className="flex flex-col gap-3">
      <CodeBlock code={code} language="bash" />
      <Blogs userId={user.id} spaceId={params.spaceId} />
    </div>
  );
};

export default SingleSpace;
