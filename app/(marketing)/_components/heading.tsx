import React from "react";

const Heading = ({
  title,
  description,
  subscription,
}: {
  title: string;
  description: string;
  subscription?: string;
}) => {
  return (
    <div className="flex flex-col gap-4 mb-20 mx-auto w-fit text-center">
      <h2 className="text-3xl font-semibold">{title}</h2>
      <div>
        <p className="text-base text-neutral-500">{description}</p>
        <p className="text-base text-neutral-500">{subscription}</p>
      </div>
    </div>
  );
};

export default Heading;
