import { useProgress } from '@/context/progressbar';
import React from 'react'

const Page2 = () => {
  const {progress, setProgress} = useProgress();
  setProgress(75)

  console.log(progress)


  return (
    <div>page 2</div>
  )
}

export default Page2