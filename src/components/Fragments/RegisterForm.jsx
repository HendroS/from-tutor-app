import InputForm from "../Elements/Input"
import Button from "../Elements/Button"

const RegisterForm = () => {
  return (
         <form>
          <InputForm label="Name" name="name" placeholder="Insert Name" />
          <InputForm name="email" type="email" label="Email" placeholder="Inset Email"/>
          <InputForm name="password" type="password" label="Password" placeholder="*****" />
          <InputForm name="confPassword" type="password" label="Confirm Password" placeholder="*****" />
          <Button classname='bg-blue-400 w-full mt-5'>Register</Button>
        </form>
  )
}

export default RegisterForm