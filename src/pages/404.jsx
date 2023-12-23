import { useRouteError } from "react-router-dom"

const ErrorPage = () => {
    const err = useRouteError()
  return (
      <div className='flex flex-col gap-3 justify-center items-center min-h-screen'>
          <h1 className="font-bold text-xl">Oopss Sorry</h1>
          <p className="text-sm">Unexpected error has occured</p>
          <p className="text-slate-600 text-sm font-thin">{err.statusText || err.message }</p>
    </div>
  )
}

export default ErrorPage