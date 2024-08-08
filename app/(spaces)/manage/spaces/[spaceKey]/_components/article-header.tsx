"use client";

import { Button } from "@/components/ui/button";
import { Article } from "@prisma/client";
import { Eye, EyeOff } from "lucide-react";
import React, { useState } from "react";
import Banner from "./banner";
import { updateArticleStatus } from "@/actions/note";
import { Loading } from "@/components/loading";
import GoBack from "@/components/go-back";

const ArticleHeader = ({
  article,
  userId,
}: {
  article: Article;
  userId: string;
}) => {
  const [loading, setLoading] = useState(false);

  const handleChangeStatus = async () => {
    try {
      setLoading(true);
      updateArticleStatus(article.id, userId, article.isPublic);
    } catch (error: any) {
      console.log("error:", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between items-center gap-10">
        <div className="flex items-center gap-4 flex-1 ">
          <GoBack />
          <p className="truncate">{article.title}</p>
        </div>
        <Button onClick={handleChangeStatus} variant="zbtn" className="w-fit">
          {loading && <Loading />}
          {!loading && article.isPublic ? (
            <div className="flex items-center gap-2">
              <Eye className="w-4 h-4" /> me
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <EyeOff className="w-4 h-4" /> us
            </div>
          )}
        </Button>
      </div>
      <Banner article={article} userId={userId} />
    </div>
  );
};

export default ArticleHeader;
