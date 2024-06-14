import React from "react";
import Heading from "./heading";
import Image from "next/image";

const TheTool = () => {
  return (
    <div className="bg-background flex flex-col items-center w-full px-6 py-2.5">
      <Heading
        title="A tool built for your fav tools."
        description="Don't change your stack, just continue with what you already know in a different manner."
      />
      <Image src="/nothing.svg" alt="" width={1000} height={500} />
    </div>
  );
};

export default TheTool;
