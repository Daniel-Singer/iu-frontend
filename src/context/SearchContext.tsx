import {
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react';

interface ISearchContext {
  searchValue: string | undefined;
  setSearchValue: React.Dispatch<SetStateAction<string | undefined>>;
}

export const SearchContext = createContext<ISearchContext | undefined>(
  undefined
);

interface ISearchProviderProps {
  children: ReactNode;
}

export const SearchProvider = ({ children }: ISearchProviderProps) => {
  const [searchValue, setSearchValue] = useState<string | undefined>(undefined);
  return (
    <SearchContext.Provider value={{ searchValue, setSearchValue }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchContext = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error(
      'useSearchContext muss sich innerhalb von SearchContext befinden'
    );
  }
  return context;
};
