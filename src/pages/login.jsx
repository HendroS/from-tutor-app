// import React from 'react'
import FormLogin from '../components/Fragments/FormLogin'
import AuthLayout from '../components/Layouts/AuthLayout'

const LoginPage = () => {
  return (
    // <div className='flex justify-center items-center min-h-screen'>
          <AuthLayout title="Login" text="Welcome to Mobile Legends" type="login">
              <FormLogin />
          </AuthLayout>
    // </div>
  )
}

export default LoginPage