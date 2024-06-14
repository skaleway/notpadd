"use client";

import { Button } from "@/components/ui/button";
import { Article } from "@prisma/client";
import { Eye, EyeOff } from "lucide-react";
import React from "react";

const ArticleHeader = ({ article }: { article: Article }) => {
  const handleChangeStatus = async () => {};

  return (
    <div className="flex justify-between items-center">
      <p>{article.title}</p>
      <Button onClick={handleChangeStatus}>
        {article.isPublic ? (
          <div className="flex items-center gap-2">
            <Eye /> public
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <EyeOff /> not public
          </div>
        )}
      </Button>
    </div>
  );
};

export default ArticleHeader;
