import { getNotesPerSpace } from "@/actions/note";
import CreateNewArticle from "@/components/modals/create-article";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Blogs = async ({
  userId,
  spaceId,
}: {
  userId: string;
  spaceId: string;
}) => {
  const articles = await getNotesPerSpace(userId, spaceId);

  return (
    <div className="flex flex-col gap-3">
      <div className="text-xl font-medium flex items-center justify-between">
        <h1>Recent to oldest articles</h1>
        <CreateNewArticle userId={userId} spaceId={spaceId} />
      </div>
      <div className="grid grid-cols-3 gap-3">
        {articles?.map((article) => {
          return (
            <Link
              href={`/manage/spaces/${spaceId}/${article.id}`}
              key={article?.id}
              className="border  rounded-lg group overflow-hidden"
            >
              <div className="h-60 w-full relative">
                <Image
                  src={
                    article.displayImage
                      ? article.displayImage
                      : "/placeholder.svg"
                  }
                  className="object-cover"
                  fill
                  alt={`notpadd article: ${article.title}`}
                />
              </div>
              <div className="flex flex-col gap-2 p-2">
                <h2 className="group-hover:underline">{article.title}</h2>
                <p>{article.description}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Blogs;
