import React from "react";

const Heading = ({
  title,

  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="flex flex-col gap-4 mb-20 mx-auto w-fit text-center">
      <h2 className="text-3xl font-semibold">{title}</h2>
      <p className="text-base text-neutral-500">{description}</p>
    </div>
  );
};

export default Heading;
