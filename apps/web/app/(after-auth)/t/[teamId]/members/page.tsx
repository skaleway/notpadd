import { Metadata } from "next";
import Members from "./members";

export const metadata: Metadata = {
  title: "Members",
  description: "Members",
};

const MembersPage = () => {
  return <Members />;
};

export default MembersPage;
