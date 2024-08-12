import { ActionIcon, TextInput } from '@mantine/core';
import { IconSearch, IconX } from '@tabler/icons-react';
import { useEffect, useRef } from 'react';
import { useSearchContext } from '../../context/SearchContext';
import { useLocation } from 'react-router-dom';

const SearchBar = () => {
  const location = useLocation();
  const { searchValue, setSearchValue } = useSearchContext();
  const ref = useRef<HTMLInputElement | null>(null);
  const handleClearSearch = () => {
    setSearchValue('');
    ref.current?.focus();
  };
  useEffect(() => {
    ref.current?.focus();
    return () => ref.current?.blur();
  }, [location]);

  return (
    <TextInput
      w={200}
      ref={ref}
      leftSection={<IconSearch size={18} />}
      placeholder="...Suche"
      value={searchValue}
      onChange={(e) => setSearchValue(e.target.value)}
      rightSection={
        searchValue !== '' ? (
          <ActionIcon
            size="sm"
            color="gray"
            variant="light"
            onClick={handleClearSearch}
          >
            <IconX size={16} />
          </ActionIcon>
        ) : null
      }
    />
  );
};

export default SearchBar;
