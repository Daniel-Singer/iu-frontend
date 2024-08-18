import React, { createContext, ReactNode, useContext, useState } from 'react';

interface IScrollingContext {
  scrolling: boolean;
  setIsScrolling: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ScrollingContext = createContext<IScrollingContext | undefined>(
  undefined
);

interface IScrollingProviderProps {
  children: ReactNode;
}

export const ScrollingProvider = ({ children }: IScrollingProviderProps) => {
  const [scrolling, setIsScrolling] = useState<boolean>(false);
  return (
    <ScrollingContext.Provider value={{ scrolling, setIsScrolling }}>
      {children}
    </ScrollingContext.Provider>
  );
};

export const useScrollingContext = () => {
  const context = useContext(ScrollingContext);
  if (!context) {
    throw new Error(
      'useScrollingContext muss sich innerhalb von ScrollingContext befinden'
    );
  }
  return context;
};
