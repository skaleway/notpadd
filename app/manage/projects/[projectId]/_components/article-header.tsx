"use client";

import { Button } from "@/components/ui/button";
import { Article } from "@prisma/client";
import { Eye, EyeOff } from "lucide-react";
import React, { useState } from "react";
import Banner from "./banner";
import { updateArticleStatus } from "@/actions/note";

const ArticleHeader = ({
  article,
  userId,
}: {
  article: Article;
  userId: string;
}) => {
  const handleChangeStatus = async () => {};

  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between items-center">
        <p>{article.title}</p>
        <Button
          onClick={() =>
            updateArticleStatus(article.id, userId, article.isPublic)
          }
          variant="zbtn"
          className="w-fit"
        >
          {article.isPublic ? (
            <div className="flex items-center gap-2">
              <Eye className="w-4 h-4" /> Public
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <EyeOff className="w-4 h-4" /> Not public
            </div>
          )}
        </Button>
      </div>
      <Banner article={article} userId={userId} />
    </div>
  );
};

export default ArticleHeader;
