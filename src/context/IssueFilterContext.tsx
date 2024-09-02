import {
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react';

interface IFilterContext {
  filterValue: number | null;
  setFilterValue: React.Dispatch<SetStateAction<number | null>>;
  isAssignee: boolean | null;
  setIsAssignee: React.Dispatch<SetStateAction<boolean | null>>;
}

export const FilterContext = createContext<IFilterContext | undefined>(
  undefined
);

interface IFilterProviderProps {
  children: ReactNode;
}

export const FilterProvider = ({ children }: IFilterProviderProps) => {
  const [filterValue, setFilterValue] = useState<number | null>(null);
  const [isCreator, setIsCreator] = useState<boolean>(true);
  const [isAssignee, setIsAssignee] = useState<boolean | null>(false);
  return (
    <FilterContext.Provider
      value={{ filterValue, setFilterValue, isAssignee, setIsAssignee }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error(
      'useFilterContext muss sich innerhalb von FilterContext befinden'
    );
  }
  return context;
};
