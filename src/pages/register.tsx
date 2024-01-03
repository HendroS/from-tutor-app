import RegisterForm from "../components/Fragments/RegisterForm"
import AuthLayout from "../components/Layouts/AuthLayout"


const RegisterPage = () => {
  return (
    // <div className='flex justify-center items-center min-h-screen'>
        <AuthLayout title="Register" text="Insert your Data" type="register">
              <RegisterForm />
        </AuthLayout>
    // </div>
  )
}

export default RegisterPage