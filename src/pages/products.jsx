// import React from 'react'

import {  useContext, useEffect, useState } from "react"
import CardProduct from "../components/Fragments/CardProduct"
// import Button from "../components/Elements/Button"
// import { useLogin } from "../hooks/useLogin"
import { getProducts } from "../services/product.services"
import TableCart from "../components/Fragments/TableCart"
import Navbar from "../components/Layouts/Navbar"
import { DarkMode } from "../components/context/DarkMode"

const LoadingSpinner = () => {
  return (
      <div className="border-4 m-auto border-blue-500 border-l-transparent h-10 w-10 rounded-full animate-spin"></div>
  )
}

const ProductPage = () => {
  // const [total, setTotal] = useState(0)
  const [products, setProducts] = useState([])
  const [isFetching, setIsFetching] = useState(false)
  const [error, setError] = useState(null)
  const {isDarkMode} = useContext(DarkMode)


  useEffect(() => {
    console.log('pr',products)
  }, )
  

  useEffect(() => {
    // setCart(JSON.parse(localStorage.getItem('cart'))|| [])
    setIsFetching(true)
    getProducts((status, res) => {
      if (status) {
        setProducts(res)
        setIsFetching(false)
      } else {
        console.log('err',res)
        setError(res.message)
      }
    });
 
  }, [])

  return (
    <div className={`w-full min-h-screen flex flex-col min-w-min max-w-7xl items-center ${isDarkMode&&'bg-slate-900'}`}>
      <Navbar/>
      {(error)
        ? <div className="h-full m-auto"><p>Opppsss... error fetching {error}</p></div>
        : <div className="py-5">
        <div className="flex flex-col justify-center items-center md:flex-row md:justify-normal md:items-start">
          <div className="mb-4 md:order-2 md:flex-1">
            <h1 className="text-3xl text-center font-bold text-blue-600 mb-4">Cart</h1>
            <TableCart products={products} />
          </div>
          <div className="w-full md:w-3/4 min-h-52 py-4 gap-1 flex justify-center flex-wrap">
            {isFetching && <div className="min-h-12 w-full m-auto"><LoadingSpinner /></div>}
              {products.map((p) => (
                // <div key={p.id} className="max-w-xs"> 
                <CardProduct key={p.id}  >
                  <CardProduct.Header image={p.image} id={p.id} />
                  <CardProduct.Body title={p.title} id={p.id}>
                    {p.description}
                  </CardProduct.Body>
                  <CardProduct.Footer id={p.id} price={p.price} />
                </CardProduct>
                // </div>
              ))}
          </div>
        </div>
      </div>
        }
    </div>
  )
}

export default ProductPage