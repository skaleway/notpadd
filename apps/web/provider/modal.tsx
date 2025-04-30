import ConfirmationModal from "@/components/modal/confirmation";
import CreateNewSpace from "@/components/modal/create-space";
import Invite from "@/components/modal/invite";
import Logout from "@/components/modal/logout";
import React from "react";

const Modal = () => {
  return (
    <>
      <CreateNewSpace />
      <ConfirmationModal />
      <Logout />
      <Invite />
    </>
  );
};

export default Modal;
