/* eslint-disable react/prop-types */
// import React from 'react'

import React, { HtmlHTMLAttributes } from "react"

// interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement>{
//   children: React.ReactNode;
// }
export type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement>

const Label = ({children='',className='',...rest}:LabelProps) => { 
  return (
    <label className={`block text-start text-sm text-slate-700 mb-2 font-bold ${className}`} {...rest}>{ children }</label>
  )
}

export default Label