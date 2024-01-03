/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
// import React from 'react'
import React, { ReactElement, forwardRef } from 'react'
import Label, { LabelProps } from './Label'
import Input, { InputProps } from './Input';

// type InputFormProps= React.HtmlHTMLAttributes<HTMLInputElement>& React.HtmlHTMLAttributes<HTMLLabelElement>&{
//   label: string;
//   name: string;
//   placeholder: string;
//   id: string;
// }
type InputFormProps= InputProps &{
  label: string | React.ReactNode;
}

const InputForm = forwardRef<HTMLInputElement,InputFormProps>(({label,name,type='text',placeholder='',onChange,...rest},ref) => {
  return (
      <div className="w-full max-w-xs">
      <Label htmlFor={name}> { label}</Label>
      <Input type={type} onChange={onChange} name={name} ref={ref} placeholder={placeholder} {...rest}  />
      </div>
  )
});

export default InputForm