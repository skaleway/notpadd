import ConfirmationModal from "@/components/modal/confirmation";
import CreateNewSpace from "@/components/modal/create-space";
import Logout from "@/components/modal/logout";
import React from "react";

const Modal = () => {
  return (
    <>
      <CreateNewSpace />
      <ConfirmationModal />
      <Logout />
    </>
  );
};

export default Modal;
