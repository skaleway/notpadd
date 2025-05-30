import { Metadata } from "next"
import Members from "./members"

export const metadata: Metadata = {
  title: "Members",
  description: "Members of the team",
}

const MembersPage = () => {
  return <Members />
}

export default MembersPage
