"use client";

import { updateArticleBg } from "@/actions/note";
import { UploadButton } from "@/utils/uploadthing";
import { Article } from "@prisma/client";
import { toast } from "sonner";

const ChangeImage = ({
  article,
  userId,
}: {
  article: Article;
  userId: string;
}) => {
  return (
    <div className="flex items-center justify-center flex-col">
      <UploadButton
        appearance={{
          button:
            "ut-uploading:cursor-not-allowed ut-uploading:bg outline-none nothing-btn after:bg-black dark:after:bg-white focus-within:outline-none focus-within:ring-0 focus-within:ring-offset-0",
          container: "w-max flex-row rounded-md border-cyan-300 bg-slate-800",
          allowedContent:
            "flex hidden h-8 flex-col items-center justify-center px-2 text-white",
        }}
        endpoint="image"
        onClientUploadComplete={(res) => {
          updateArticleBg(res[0].url, article.id, userId);
        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
          // console.log(error);

          toast.error(`ERROR! ${error.message}`);
        }}
        className="custom-button"
      />
    </div>
  );
};

export default ChangeImage;
