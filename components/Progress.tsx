import React, { Children } from 'react'
interface Props{
    children: JSX.Element[] | JSX.Element,
    progress:number;
}

const Progress = ({children, progress}:Props) => {
    
  return (
    <div className='flex justify-center items-center flex-col space-y-8'>{children}<div className='w-[80vw] h-2 relative'><div className= {`absolute w-[${progress}/100] h-full bg-red-500`}></div></div></div>
  )
}

export default Progress