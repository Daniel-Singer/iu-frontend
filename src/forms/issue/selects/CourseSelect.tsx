import { Select } from '@mantine/core';
import { useQuery } from '@tanstack/react-query';
import { listCourses } from '../../../queries/courses/listCourses';
import { useIssueFormContext } from '../context';
import { useAuthContext } from '../../../context/AuthContext';

const CourseSelect = () => {
  const { auth } = useAuthContext();
  const { data: courses } = useQuery({
    queryKey: ['courses'],
    queryFn: listCourses,
    select: (data) => {
      if (auth.role !== 'admin') {
        // show only active courses
        return data
          ?.filter(({ active }) => active)
          .map(({ id, code, title }) => ({
            value: String(id!),
            label: `${code} - ${title}`,
          }));
      } else {
        // show all courses if user is admin
        return data?.map(({ id, code, title }) => ({
          value: String(id!),
          label: `${code} - ${title}`,
        }));
      }
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
