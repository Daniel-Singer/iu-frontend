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
}

export const FilterContext = createContext<IFilterContext | undefined>(
  undefined
);

interface IFilterProviderProps {
  children: ReactNode;
}

export const FilterProvider = ({ children }: IFilterProviderProps) => {
  const [filterValue, setFilterValue] = useState<number | null>(null);
  return (
    <FilterContext.Provider value={{ filterValue, setFilterValue }}>
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
