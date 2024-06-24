import { TextInput } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import { useEffect, useRef } from 'react';

const SearchBar = () => {
  const ref = useRef<HTMLInputElement | null>(null);
  useEffect(() => {
    ref.current?.focus();
  }, []);
  return (
    <TextInput
      ref={ref}
      leftSection={<IconSearch size={18} />}
      placeholder="...Suche"
    />
  );
};

export default SearchBar;
