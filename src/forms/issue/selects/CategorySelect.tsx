import { Select } from '@mantine/core';
import { useQuery } from '@tanstack/react-query';
import { listCategories } from '../../../queries/categories/listCategories';
import { useIssueFormContext } from '../context';

const CategorySelect = () => {
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
  const form = useIssueFormContext();
  return (
    <Select
      label="Kategorie"
      data={categories}
      withAsterisk
      {...form.getInputProps('category_id')}
    />
  );
};

export default CategorySelect;
