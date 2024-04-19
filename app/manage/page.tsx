import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Manage",
  description: "Manage your content in one clicks",
};

const Manage = () => redirect("/manage/projects");

export default Manage;
