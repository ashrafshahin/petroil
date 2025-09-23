import React from 'react'

const ServiceBackground = ({children, className}) => {
  return (
      <div className={`${className} z-[1] after:z-[-1] w-[50%] relative bg-[url(./components/images/background.png)] bg-no-repeat bg-cover bg-center pt-[147px] pb-[139px] after:absolute after:bg-black/60 after:content-[""] after:w-full after:h-full after:top-0 after:left-0 `}>{children}</div>
  )
}

export default ServiceBackground