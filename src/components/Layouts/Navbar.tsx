import { useContext, useEffect, useState } from "react";
import { useLogin } from "../../hooks/useLogin"
import Button from "../Elements/Button"
import { useSelector } from "react-redux";
import { DarkMode } from "../../context/DarkMode";
import { useTotalPrice } from "../../context/TotalPriceContex";

const Navbar = () => {
    const username = useLogin();
    const [totalItem, setTotalItem] = useState(0)
    const cart = useSelector((state:any) => state.cart.data)
    const { isDark, toggleDark} = useContext(DarkMode)
    const { total } = useTotalPrice()

    useEffect(() => {
        console.log(total)
        const sum = cart.reduce((acc:number, item:any) => acc + item.qty, 0)
        setTotalItem(sum)
    },[cart])
    


    const handleLogout = () => {
        localStorage.removeItem('token')
        location.href = '/login'
    }
    console.log('username',username)


    return(<div className="flex w-full md:px-10 justify-end h-20 text-white bg-blue-600 items-center">{username}
        <Button type="button" onClick={handleLogout} classname="ml-5 bg-black">Logout</Button>
        <div className="flex items-center bg-gray-800 ml-5 p-2 rounded-md">
            item: {totalItem} | total: {total.toLocaleString('en-US', { maximumFractionDigits: 0, style: 'currency', currency: 'USD' })} 
        </div>
        <Button classname="ml-2 md:ml-4 mr-1 md:mr-2" onClick={() => {
            toggleDark();
            // console.log(isDark)
        }}>{isDark ? 'light' : 'dark'}</Button>
      </div>)
    
    // return (
    //     <div className="w-full bg-yellow-200 h-32">navbar</div>
    // )
}

export default Navbar
