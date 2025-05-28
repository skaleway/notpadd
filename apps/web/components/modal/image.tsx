import React from "react"
import Image, { ImageProps } from "next/image"

const SuperImage = ({ src, alt, blurDataURL, ...props }: ImageProps) => {
  return (
    <Image
      src={src ?? "/placeholder.svg"}
      alt={alt}
      {...props}
      blurDataURL={
        blurDataURL ??
        "data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoIAAYABUB8JZwAA3AA/vBmHAA="
      }
      placeholder="blur"
    />
  )
}

export default SuperImage
