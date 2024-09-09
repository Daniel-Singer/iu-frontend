import { createContext, ReactNode, useContext } from 'react';

interface ICourseContext {
  active: boolean;
}

export const CourseContext = createContext<ICourseContext | undefined>(
  undefined
);

interface IContextProviderProps {
  issue: IIssueReceive | undefined;
  children: ReactNode;
}

export const CourseProvider = ({ issue, children }: IContextProviderProps) => {
  return (
    <CourseContext.Provider value={{ active: issue?.course?.active! }}>
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
