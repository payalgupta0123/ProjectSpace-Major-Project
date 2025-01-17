import Upcoming_Events from "./Upcoming_Events"
import Calendar from "./Calendar";
import User from "./user";
const Profile = () => {
  return (
    <div className="px-2 py-4 mt-2 bg-[#d7e9f2] rounded-lg
    w-full dark:bg-gray-700 lg:w-60 xl:w-80 flex flex-col
    justify-between gap-4 shadow-md">
        <User />
        <Calendar />
        <Upcoming_Events />
    </div>
  )
}

export default Profile