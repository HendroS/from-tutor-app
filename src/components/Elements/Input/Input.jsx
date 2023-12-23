/* eslint-disable react/display-name */

import { forwardRef } from "react"

/* eslint-disable react/prop-types */
// import React from 'react'

// import { forwardRef } from "react"

const Input = forwardRef(  ({ type = 'text', placeholder,...rest},ref) => {
    return (
      <input ref={ref} type={type} name='email' placeholder={placeholder} className='text-slate700 border py-2 px-3 rounded w-full' {...rest} />
  )
})


export default Input