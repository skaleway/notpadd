"use client";

import { uploadBannerImage } from "@/actions/note";
import { Button, buttonVariants } from "@/components/ui/button";
import { UploadButton } from "@/utils/uploadthing";
import Image from "next/image";
import { useState, ChangeEvent } from "react";
import { toast } from "sonner";

const ChangeImage = () => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  async function handleUploadImage() {
    if (!file) return toast.error("file required");

    const image = uploadBannerImage(file);

    toast.promise(image, {
      loading: "Creating a new article...",
      success: (article) => {
        if (article) {
          console.log(article);
        }

        return "Banner image changed";
      },
      error: "Failed to upload Image.",
    });
  }

  return (
    <div className="flex items-center justify-center flex-col">
      <UploadButton
        appearance={{
          button:
            "ut-uploading:cursor-not-allowed  outline-none nothing-btn after:bg-orange-400 focus-within:outline-none focus-within:ring-0 focus-within:ring-offset-0",
          container: "w-max flex-row rounded-md border-cyan-300 bg-slate-800",
          allowedContent:
            "flex hidden h-8 flex-col items-center justify-center px-2 text-white",
        }}
        endpoint="image"
        onClientUploadComplete={(res) => {
          // Do something with the response
          console.log("Files: ", res[0].url);
        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
        className="custom-button"
      />
    </div>
  );
};

export default ChangeImage;
