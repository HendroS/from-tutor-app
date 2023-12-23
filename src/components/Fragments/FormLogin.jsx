import InputForm from "../Elements/Input"
import Button from "../Elements/Button"
import { useEffect, useRef, useState } from "react";
import { login } from "../../services/auth.service";

const FormLogin = () => {
  // const [username, setUsername] = useState('')
  // const [password, setPassword] = useState('')
  const [loginFailed,setLoginFailed] = useState('')

  useEffect(() => {
    usernameRef.current.focus()
  },[])
  const loginHandler = (event) => {
    event.preventDefault();
    const data = {
      username: event.target.username.value,
      password: event.target.password.value
    }
    console.log(data)
    login(data, (status, res) => {
      if (status) {
        localStorage.setItem('token', JSON.stringify(res.data.token))
        location.href = '/products'
      } else {
        setLoginFailed(res.response.data)
        console.log(res.response.data)
      }  
    })
  }
  const usernameRef = useRef(null)
  return (

    <form onSubmit={loginHandler}>
      {loginFailed && <p className="text-red-500 text-center mb-2">{loginFailed}</p>}
      <InputForm onChange={()=>{}}  ref={usernameRef} name="username" type="text" label="Username" placeholder="Jon chena"/>
      <InputForm onChange={()=>{}} name="password" type="password" label="Password" placeholder="*****" />
      <Button type="submit" classname='bg-blue-400 w-full mt-5'>Login</Button>
    </form>
  )
}

export default FormLogin