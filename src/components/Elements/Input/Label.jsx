/* eslint-disable react/prop-types */
// import React from 'react'

const Label = ({htmlfor,children}) => {
   
  return (
      <label htmlFor={htmlfor} className='block text-start text-sm text-slate-700 mb-2 font-bold'>{ children }</label>
  )
}

export default Label