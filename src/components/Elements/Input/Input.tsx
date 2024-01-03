/* eslint-disable react/display-name */

import React, { forwardRef } from "react"
type handleChange = (value: string, checked: boolean, name: string) => void

type eventHandleChange<T extends HTMLElement> = (
  event: React.ChangeEvent<T>
) => void;

type Change<T extends HTMLElement> = handleChange | eventHandleChange<T>;
export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  onChange?: Change<HTMLInputElement>
}
const Input = forwardRef<HTMLInputElement,InputProps>(  ({className='',...rest}:InputProps,ref) => {
    return (
      <input ref={ref} className={`text-slate700 border py-2 px-3 rounded w-full ${className}`} {...rest} />
  )
})


export default Input