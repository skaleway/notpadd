"use client";

import CreateNewSpace from "@/components/modals/create-space";
import React, { useState, useEffect } from "react";

const ModalProvider = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <CreateNewSpace />
    </>
  );
};

export default ModalProvider;
