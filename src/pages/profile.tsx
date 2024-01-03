import Button from "../components/Elements/Button";
import { useLogin } from "../hooks/useLogin"

const ProfilePage = () => {
    const username = useLogin();
    const handleLogout = () => {
    localStorage.removeItem('token')
    location.href='/login'
  }
  return (
    <div className="w-full flex flex-col min-w-min max-w-7xl">
      <div className="flex w-full md:px-10 justify-end h-20 text-white bg-blue-600 items-center">{username}
      <Button type="button" onClick={handleLogout} classname="ml-5 bg-black">Logout</Button>
     </div></div>
  )
}

export default ProfilePage