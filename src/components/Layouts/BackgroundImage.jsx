import React from 'react'

const BackgroundImage = ({children}) => {
  return (
      <div className=' z-[1] relative bg-[url(./components/images/banner.png)] py-[257px] bg-no-repeat bg-cover bg-center '>{ children }</div>
  )
}

export default BackgroundImage