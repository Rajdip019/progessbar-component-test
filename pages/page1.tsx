import Progress from '@/components/Progress';
import { useProgress } from '@/context/progressbar'
import React from 'react'

const page1 = () => {
    const {progress, setProgress} = useProgress();
    setProgress(50)

    console.log(progress)
  return (
    <Progress progress={progress}><div>page1</div></Progress>
  )
}

export default page1