import { useState } from 'react';

import React, { useContext, useEffect } from 'react';


const defaultValues = {
  progress:0,
  setProgress: (progress:number) => {},

};

const progressContext = React.createContext(defaultValues);

export function useProgress() {
  return useContext(progressContext);
}

export function ProgressContextProvider({ children }: any) {
  const [progress, setProgress] = useState<number>(0);

  

  return (
    <progressContext.Provider value={{progress, setProgress}}>
      { children}
    </progressContext.Provider>
  );
}