import { useState } from "react";
import ReactCrop, {
  type Crop,
  centerCrop,
  makeAspectCrop,
} from "react-image-crop";
import { Button } from "@workspace/ui/components/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@workspace/ui/components/dialog";
import "react-image-crop/dist/ReactCrop.css";

interface CropImageDialogProps {
  src: string;
  cropAspectRatio: number;
  onCropped: (blob: Blob | null) => void;
  onClose: () => void;
}

export default function CropImageDialog({
  src,
  cropAspectRatio,
  onCropped,
  onClose,
}: CropImageDialogProps) {
  const [crop, setCrop] = useState<Crop>();
  const [imageRef, setImageRef] = useState<HTMLImageElement>();

  function onImageLoad(e: React.SyntheticEvent<HTMLImageElement>) {
    const { naturalWidth: width, naturalHeight: height } = e.currentTarget;
    setImageRef(e.currentTarget);

    const crop = centerCrop(
      makeAspectCrop(
        {
          unit: "%",
          width: 90,
        },
        cropAspectRatio,
        width,
        height,
      ),
      width,
      height,
    );

    setCrop(crop);
  }

  function getCroppedImg(
    image: HTMLImageElement,
    crop: Crop,
    fileName: string,
  ): Promise<Blob | null> {
    const canvas = document.createElement("canvas");
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    canvas.width = crop.width;
    canvas.height = crop.height;
    const ctx = canvas.getContext("2d");

    if (!ctx) {
      return Promise.resolve(null);
    }

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height,
    );

    return new Promise((resolve) => {
      canvas.toBlob(
        (blob) => {
          resolve(blob);
        },
        "image/webp",
        1,
      );
    });
  }

  async function handleCrop() {
    if (!imageRef || !crop) return;

    const croppedImage = await getCroppedImg(imageRef, crop, "cropped.webp");
    onCropped(croppedImage);
    onClose();
  }

  return (
    <Dialog open onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Crop image</DialogTitle>
        </DialogHeader>
        <ReactCrop
          crop={crop}
          onChange={(c) => setCrop(c)}
          aspect={cropAspectRatio}
          className="mx-auto size-fit"
        >
          <img src={src} onLoad={onImageLoad} alt="Crop" />
        </ReactCrop>
        <DialogFooter>
          <Button variant="secondary" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={handleCrop}>Crop</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
