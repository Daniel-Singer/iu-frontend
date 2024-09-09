import { createContext, ReactNode, useContext, useState } from 'react';

interface ICourseContext {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CourseContext = createContext<ICourseContext | undefined>(
  undefined
);

interface IContextProviderProps {
  children: ReactNode;
}

export const CourseProvider = ({ children }: IContextProviderProps) => {
  const [active, setActive] = useState<boolean>(true);

  return (
    <CourseContext.Provider value={{ active, setActive }}>
      {children}
    </CourseContext.Provider>
  );
};

export const useCourseContext = () => {
  const context = useContext(CourseContext);
  if (!context) {
    throw new Error(
      'useCourseContext muss sich innerhalb von CourseProvider befinden'
    );
  }
  return context;
};
