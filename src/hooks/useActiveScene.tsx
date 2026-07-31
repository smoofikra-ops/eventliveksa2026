import React, { createContext, useContext, useState, useEffect } from 'react';

type ActiveSceneContextType = {
  activeSceneId: string;
  setActiveSceneId: (id: string) => void;
  scrollYProgress: number; // optional if needed
};

const ActiveSceneContext = createContext<ActiveSceneContextType | undefined>(undefined);

export const ActiveSceneProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [activeSceneId, setActiveSceneId] = useState('hero');
  
  return (
    <ActiveSceneContext.Provider value={{ activeSceneId, setActiveSceneId, scrollYProgress: 0 }}>
      {children}
    </ActiveSceneContext.Provider>
  );
};

export const useActiveScene = () => {
  const context = useContext(ActiveSceneContext);
  if (context === undefined) {
    throw new Error('useActiveScene must be used within an ActiveSceneProvider');
  }
  return context;
};
