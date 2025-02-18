import React from "react";

type Props = {
  children: React.ReactNode;
};

const AfterAuthLayout = ({ children }: Props) => {
  return <div>{children}</div>;
};

export default AfterAuthLayout;
