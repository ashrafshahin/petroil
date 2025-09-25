import React from 'react'

const Container = ({children, className}) => {
  return (
      <div className={`md:w-[1144px] mx-auto px-3 md:px-0 ${className}`}>{children}</div>
  )
}

export default Container