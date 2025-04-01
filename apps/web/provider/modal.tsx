import ConfirmationModal from "@/components/modal/confirmation";
import CreateNewSpace from "@/components/modal/create-space";
import React from "react";

const Modal = () => {
  return (
    <>
      <CreateNewSpace />
      <ConfirmationModal />
    </>
  );
};

export default Modal;
