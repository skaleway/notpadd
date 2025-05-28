"use client";

import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import { useRef, useState } from "react";
import Image, { StaticImageData } from "next/image";
import Resizer from "react-image-file-resizer";
import CropImageDialog from "@/components/modal/crop-image";
import { Camera } from "lucide-react";
import { useTeams } from "@/hooks/use-team";
import useUploader from "@/hooks/use-uploader";

const Avatar = () => {
  const { team } = useTeams();
  const { startUpload, isUploading, url } = useUploader("teamImageUploader");
  const [croppedAvatar, setCroppedAvatar] = useState<Blob | null>(null);

  const handleCroppedAvatar = async (blob: Blob | null) => {
    setCroppedAvatar(blob);
    if (blob) {
      const file = new File([blob], "avatar.webp", { type: "image/webp" });
      console.log("Uploading avatar for team:", team?.id);
      await startUpload([file], { teamId: team?.id || "" });
    }
  };

  return (
    <Card className="flex flex-col p-0 relative">
      <div className="flex items-center justify-between">
        <CardHeader className="p-6 flex flex-col gap-2">
          <CardTitle>Avatar</CardTitle>
          <CardDescription className="flex flex-col gap-1">
            <span className="text-sm text-muted-foreground">
              This is your team&apos;s avatar.
            </span>
            <span>
              Click on the avatar to upload a custom one from your files.
            </span>
          </CardDescription>
        </CardHeader>
        <div className="size-20 min-w-20 bg-muted dark:bg-muted/50 rounded-md mr-6">
          <AvatarInput
            src={
              croppedAvatar
                ? URL.createObjectURL(croppedAvatar)
                : url || team?.imageUrl || ""
            }
            onImageCropped={handleCroppedAvatar}
            isUploading={isUploading}
          />
        </div>
      </div>
      <div className="absolute top-4 right-4"></div>
      <CardFooter className="border-t pt-6">
        <p className="text-sm text-muted-foreground">
          An avatar is optional but strongly recommended.
        </p>
      </CardFooter>
    </Card>
  );
};

interface AvatarInputProps {
  src: string | StaticImageData;
  onImageCropped: (blob: Blob | null) => void;
  isUploading: boolean;
}

function AvatarInput({ src, onImageCropped, isUploading }: AvatarInputProps) {
  const [imageToCrop, setImageToCrop] = useState<File>();
  const fileInputRef = useRef<HTMLInputElement>(null);

  function onImageSelected(image: File | undefined) {
    if (!image) return;

    Resizer.imageFileResizer(
      image,
      1024,
      1024,
      "WEBP",
      100,
      0,
      (uri) => setImageToCrop(uri as File),
      "file"
    );
  }

  return (
    <>
      <input
        type="file"
        accept="image/*"
        onChange={(e) => onImageSelected(e.target.files?.[0])}
        ref={fileInputRef}
        className="sr-only hidden"
        disabled={isUploading}
      />
      <button
        type="button"
        onClick={() => fileInputRef.current?.click()}
        className="group relative block size-full"
        disabled={isUploading}
      >
        {src && (
          <Image
            src={src}
            alt="Avatar preview"
            width={150}
            height={150}
            className={`size-full flex-none rounded-md object-cover ${
              isUploading ? "opacity-50" : ""
            }`}
          />
        )}
        {!src && (
          <span className="absolute inset-0 m-auto flex size-12 items-center justify-center rounded-full bg-black bg-opacity-30 text-white transition-colors duration-200 group-hover:bg-opacity-25">
            <Camera size={24} />
          </span>
        )}
      </button>
      {imageToCrop && (
        <CropImageDialog
          src={URL.createObjectURL(imageToCrop)}
          cropAspectRatio={1}
          onCropped={onImageCropped}
          onClose={() => {
            setImageToCrop(undefined);
            if (fileInputRef.current) {
              fileInputRef.current.value = "";
            }
          }}
        />
      )}
    </>
  );
}

export default Avatar;
