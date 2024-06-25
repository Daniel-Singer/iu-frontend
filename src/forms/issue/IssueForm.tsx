import { Select, Stack, TextInput, Textarea } from '@mantine/core';
import { useQuery } from '@tanstack/react-query';
import { listCategories } from '../../queries/categories/listCategories';

const IssueForm = () => {
  const { data: categories } = useQuery({
    queryKey: ['categories'],
    queryFn: listCategories,
    select: (data) => {
      return data?.map(({ id, label }) => ({
        value: String(id!),
        label,
      }));
    },
  });
  return (
    <form>
      <Stack>
        <Select label="Kategorie" data={categories} withAsterisk />
        <TextInput label="Kurzbeschreibung" withAsterisk />
        <Textarea label="Beschreibung" withAsterisk minRows={5} autosize />
      </Stack>
    </form>
  );
};

export default IssueForm;
