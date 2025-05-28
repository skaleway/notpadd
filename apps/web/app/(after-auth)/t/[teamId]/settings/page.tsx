import Avatar from "./_component/avatar"
import Danger from "./_component/danger"
import TeamName from "./_component/team-name"

const SettingsPage = () => {
  return (
    <div className="grid gap-6">
      <Avatar />
      <TeamName />
      <Danger />
    </div>
  )
}
export default SettingsPage
