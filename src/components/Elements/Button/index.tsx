import React from "react"

/* eslint-disable react/prop-types */
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &{
  children: React.ReactNode;
  classname?: string;

}
const Button = ({ children, classname,...rest}:ButtonProps) => {
    // const { children, variant = "bg-black" } = props
    return (
      <button className={`h-10 bg-black px-10 rounded-md font-semibold ${classname} text-white`} {...rest}>
          {children}
    </button>
  )
}

export default Button