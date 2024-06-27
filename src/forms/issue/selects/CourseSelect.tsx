import { Select } from '@mantine/core';
import { useQuery } from '@tanstack/react-query';
import { listCourses } from '../../../queries/courses/listCourses';
import { useIssueFormContext } from '../context';

const CourseSelect = () => {
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

  const form = useIssueFormContext();
  return (
    <Select
      label="Kurs"
      data={courses}
      withAsterisk
      searchable
      {...form.getInputProps('course_id')}
    />
  );
};

export default CourseSelect;
