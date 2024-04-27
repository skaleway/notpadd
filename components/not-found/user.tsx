import Image from "next/image";
import React from "react";

const UserNotFound = () => {
  return (
    <div className="flex h-full rounded-lg divide-dashed items-center justify-center border border-dashed">
      <Image
        src="/user-not-found-dark.svg"
        height="200"
        width="200"
        alt="Logo"
        className="dark:hidden"
      />
      <Image
        src="/user-not-found-light.svg"
        height="200"
        width="200"
        alt="Logo"
        className="hidden dark:block"
      />
    </div>
  );
};

export default UserNotFound;
