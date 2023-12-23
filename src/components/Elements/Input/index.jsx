/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
// import React from 'react'
import { forwardRef } from 'react'
import Input from './Input'
import Label from './Label'

const InputForm = forwardRef(({label,name,type="text",placeholder='',...rest},ref) => {
  return (
      <div className="w-full max-w-xs">
          <Label htmlfor={name}>{label}</Label>
      <Input ref={ref} id={name} name={name} type={type} placeholder={placeholder} {...rest} />
      </div>
  )
});

export default InputForm