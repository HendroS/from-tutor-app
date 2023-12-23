import { useContext, useEffect, useState } from "react";
import { useLogin } from "../../hooks/useLogin"
import Button from "../Elements/Button"
import { useSelector } from "react-redux";
import { DarkMode } from "../context/DarkMode";
import { useTotalPrice } from "../context/TotalPriceContex";

const Navbar = () => {
    const username = useLogin();
    const [totalItem, setTotalItem] = useState(0)
    const cart = useSelector(state => state.cart.data)
    const { isDarkMode, setIsDarkMode } = useContext(DarkMode)
    const {total} = useTotalPrice()

    useEffect(() => {
        const sum = cart.reduce((acc, item) => acc + item.qty, 0)
        setTotalItem(sum)
    },[cart])
    


    const handleLogout = () => {
        localStorage.removeItem('token')
        location.href = '/login'
    }


    return(<div className="flex w-full md:px-10 justify-end h-20 text-white bg-blue-600 items-center">{username}
        <Button type="button" onClick={handleLogout} classname="ml-5 bg-black">Logout</Button>
        <div className="flex items-center bg-gray-800 ml-5 p-2 rounded-md">
            item: {totalItem} | total: {Number(total).toLocaleString('en-US', { maximumFractionDigits: 0, style: 'currency', currency: 'USD' })} 
        </div>
        <Button classname="ml-2 md:ml-4 mr-1 md:mr-2"  onClick={()=>setIsDarkMode(!isDarkMode)}>{ isDarkMode?'light':'dark'}</Button>
      </div>)
}

export default Navbar
