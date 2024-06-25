import { useQuery } from '@tanstack/react-query';
import { listCategories } from '../../../queries/categories/listCategories';
import { listCourses } from '../../../queries/courses/listCourses';

export const useSelectData = () => {
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
  const { data: courses } = useQuery({
    queryKey: ['courses'],
    queryFn: listCourses,
    select: (data) => {
      return data?.map(({ id, code, title }) => ({
        value: String(id!),
        label: `${code} - ${title}`,
      }));
    },
  });
  return {
    categories,
    courses,
  };
};
