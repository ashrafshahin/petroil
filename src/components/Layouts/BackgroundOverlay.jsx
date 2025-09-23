import React from 'react'

const BackgroundOverlay = ({children}) => {
  return (
      <div className=' z-[-1] absolute bg-black/60 content-[" "] w-full h-full top-[0px] left-[0px]'>{children}
          </div>
  )
}

export default BackgroundOverlay