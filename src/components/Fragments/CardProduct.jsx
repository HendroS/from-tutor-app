/* eslint-disable react/prop-types */
// import React from 'react'

import { Link } from "react-router-dom"
import Button from "../Elements/Button"
import { useDispatch } from "react-redux"
import { addToCart } from "../../redux/slices/cartSlice"

const CardProduct = ({ children }) => {
  return (
          <div className="w-full max-w-xs bg-slate-800 rounded-lg border border-slate-400 shadow overflow-hidden flex flex-col justify-between">
              {children}
          </div>
  )
}

const Header = ({image,id}) => {
  return (
              <Link to={"/products/"+id}>
                <img src={image} alt="shoes" className="p-8 rounded-t-lg h-60 w-full object-cover" />
            </Link>)
}
const Body = ({children,title,id}) => {
    return <div className="px-5 pb-5 h-full">
              <Link to={"/products/"+id}>
                <h5 className="text-xl font-semibold text-white tracking-tight">{ title }</h5>
                <p className="text-sm items-center text-white line-clamp-3">{ children}</p>
              </Link>
            </div>
 }
const Footer = ({ price, id }) => {
  const dispatch = useDispatch()  
  return (<div className="flex justify-between items-center px-5 pb-5">
    <span className="text-xl font-bold items-center text-white">{Number(price).toLocaleString('en-US', { maximumFractionDigits: 0, style: 'currency', currency: "USD" })}</span>
    <Button classname="bg-blue-700 text-sm text-nowrap px-5" onClick={() => dispatch(addToCart({id:id,qty:1}))}>Add to chart</Button>
  </div>);
}

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;



export default CardProduct