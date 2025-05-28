"use client";

import type { ClipboardEvent } from "react";
import { useCallback, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import {
  generateClientDropzoneAccept,
  generatePermittedFileTypes,
} from "uploadthing/client";

import useUploader from "@/hooks/use-uploader";
import { Icons } from "@workspace/ui/components/icons";
import { cn } from "@workspace/ui/lib/utils";
import SuperImage from "./modal/image";
import { Uploading } from "@/app/(after-auth)/t/_components/upload";

interface DropZoneProps {
  spaceId: string;
  slug: string;
  previewImage: string | null;
  previewBlur: string | undefined;
}

const DropZone = ({
  spaceId,
  slug,
  previewImage,
  previewBlur,
}: DropZoneProps) => {
  const { routeConfig, startUpload, isUploading, uploadProgress } = useUploader(
    "articleImagePreview"
  );

  const sendingData = {
    spaceId,
    slug,
  };

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const file = acceptedFiles[0];
      if (file) {
        startUpload([file], sendingData);
      }
    },
    [startUpload]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    maxFiles: 1,
    accept: generateClientDropzoneAccept(
      generatePermittedFileTypes(routeConfig).fileTypes
    ),
  });

  const onPaste = (e: ClipboardEvent) => {
    if (e.clipboardData && e.clipboardData.items) {
      const files = Array.from(e.clipboardData.items)
        .filter((item) => item.kind === "file")
        .map((item) => item.getAsFile())
        .filter((file): file is File => file !== null);
      const file = files[0];
      if (file) {
        startUpload([file], sendingData);
      }
    }
  };

  useEffect(() => {
    const handlePaste = (e: Event) => {
      const clipboardEvent = e as unknown as ClipboardEvent;
      onPaste(clipboardEvent);
    };

    window.addEventListener("paste", handlePaste);
    return () => {
      window.removeEventListener("paste", handlePaste);
    };
  }, []);

  return (
    <div
      {...getRootProps()}
      className={cn(
        "transition-all duration-200 border-2 border-dashed border-primary/5 aspect-video rounded-lg p-4 relative overflow-hidden group",
        {
          "bg-primary/5 p-2": isDragActive,
        }
      )}
    >
      <input {...getInputProps()} />

      <div className="absolute inset-0 flex items-center justify-center flex-col gap-2">
        <div className="flex items-center justify-center size-10 bg-primary rounded-md text-primary-foreground">
          <Icons.upload className="size-6" />
        </div>
        <span className="text-sm">
          Drag and drop to replace or copy & paste image
        </span>
      </div>

      {previewImage && (
        <div className="absolute inset-0 flex items-center justify-center">
          <SuperImage
            src={previewImage}
            alt={`Preview of ${slug}`}
            fill
            blurDataURL={previewBlur}
            className="object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-background/50 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 cursor-pointer flex-col gap-2">
            <div className="flex items-center justify-center size-10 bg-primary rounded-md text-primary-foreground">
              <Icons.upload className="size-6" />
            </div>
            <span className="text-sm">
              Drag and drop to replace or copy & paste image
            </span>
          </div>
        </div>
      )}

      {isUploading && (
        <div className="absolute inset-0 flex items-center justify-center z-20 aspect-video bg-background flex-col gap-2">
          <Uploading className="size-14" />
          <span className="text-sm"> {uploadProgress} % Uploaded</span>
        </div>
      )}
    </div>
  );
};

export default DropZone;
