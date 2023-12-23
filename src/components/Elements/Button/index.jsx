/* eslint-disable react/prop-types */
const Button = ({ children, classname = "",onClick=()=>{},type="button"}) => {
    // const { children, variant = "bg-black" } = props
    return (
      <button className={`h-10 bg-black px-10 rounded-md font-semibold ${classname} text-white`}
        onClick={onClick}
        type={type}
      >
          {children}
    </button>
  )
}

export default Button