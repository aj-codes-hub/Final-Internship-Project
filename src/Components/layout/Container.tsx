import React, { type ReactNode } from 'react'

interface ContainerProps{
children:   ReactNode
className?: string
}

const Container:React.FC<ContainerProps> = ({children , className=''}) => {
  return (
   <div className={`w-full ${className}`}>
     {children}
   </div>
  )
}

export default Container