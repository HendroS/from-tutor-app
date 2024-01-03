import InputForm from "../Elements/Input"
import Button from "../Elements/Button"
import { ChangeEventHandler, useEffect, useRef, useState } from "react";
import { login } from "../../services/auth.service";

const FormLogin = () => {
  const [data, setData] = useState({
    username: '',
    password: ''
  });
  const [showPass, setShowPass] = useState(false);
  const [loginFailed, setLoginFailed] = useState('');
  const usernameRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    usernameRef.current?.focus()
  }, [])
  console.log('render',showPass)
  
  const InputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setData(prev => {
      return { ...prev,[ event.target.name]: event.target.value  }
    })
  }

  const loginHandler = (event:React.FormEvent<HTMLFormElement>):void => {
    event.preventDefault();
    // console.log('data',JSON.stringify(data))
    login(JSON.stringify(data), (status, res) => {
      if (status) {
        localStorage.setItem('token', JSON.stringify(res.data.token))
        location.href = '/products'
      } else {
        setLoginFailed(res.response.data)
        console.log(res.response.data)
      }  
    })
  }
  return (

    <form onSubmit={loginHandler}>
      {loginFailed && <p className="text-red-500 text-center mb-2">{loginFailed}</p>}
      <InputForm onChange={InputChangeHandler} ref={usernameRef} name="username" type="text" label="Username" placeholder="Jon chena"/>
      <div className="relative">
        <InputForm className="pr-10" onChange={InputChangeHandler} name="password" type={showPass?"text":"password"} label="Password" placeholder="*****" />
      <i onClick={()=>setShowPass(!showPass)} className="absolute bottom-2 right-0">{showPass?'👀':'🫣'}</i>
      </div>
      <Button type="submit" classname='bg-blue-400 w-full mt-5'>Login</Button>
    </form>
  )
}

export default FormLogin