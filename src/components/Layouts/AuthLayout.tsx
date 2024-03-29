/* eslint-disable react/prop-types */

import { ReactNode, useContext } from "react"
import { Link } from "react-router-dom"
import { DarkMode } from "../../context/DarkMode"
import Button from "../Elements/Button"

// import { Children } from 'react'
type AuthProps = {
  title: string;
  text: string;
  type: string;
  children?:ReactNode,

}
// const AuthLayout = ({ title, text, type }:layoutProp) => {
const AuthLayout = ({title,text,type,children }:AuthProps) => {
  const { isDark,toggleDark } = useContext(DarkMode)
  return (
    <div className={`flex justify-center items-center min-h-screen ${isDark? 'bg-slate-800': 'bg-slate-100'}`}>
      <Button onClick={()=>toggleDark()}  classname={`absolute max-w-fit top-2 right-2 ${isDark ? 'text-black bg-slate-200 ' : 'text-white bg-slate-900 '}`}>{isDark ? 'light' : 'dark'}</Button>
          <div className="w-full max-w-xs">
          <h1 className='text-3xl text-center font-bold text-blue-500'>{ title}</h1>
          <p className='mb-8 text-center font-medium text-slate-500'>{ text}</p>
          {children}
          <p className='mt-4 text-sm text-center'>{type == 'login' ? "Dont" : "Already"} have an Account?
              {type == "login" && <Link className='text-bo{ld text-blue-600' to="/register">Sign Up</Link>}
              {type == "register" && <Link className='text-bo{ld text-blue-600' to="/login">Sign In</Link>}
          </p>
      </div>

    </div>

  )
}

export default AuthLayout