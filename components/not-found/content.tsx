import Image from "next/image";
import React from "react";

const ContentNotFound = () => {
  return (
    <div className="flex h-full rounded-lg divide-dashed items-center justify-center border border-dashed">
      <Image
        src="/content-not-found-dark.svg"
        height="200"
        width="200"
        alt="Logo"
        className="dark:hidden"
      />
      <Image
        src="/content-not-found-light.svg"
        height="200"
        width="200"
        alt="Logo"
        className="hidden dark:block"
      />
    </div>
  );
};

export default ContentNotFound;
