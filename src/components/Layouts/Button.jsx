import React from 'react'

const Button = ({children, className}) => {
  return (
    <button className={`${className} font-primary font-semibold text-white bg-primary border-none py-2 md:py-4 px-6 md:px-11 `} >{children}</button>
  )
}

export default Button