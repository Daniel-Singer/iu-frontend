import { useQuery } from '@tanstack/react-query';
import { listUsers } from '../../queries/users/listUsers';
import { Select } from '@mantine/core';
import { useCourseFormContext } from './context';

const TutorInput = () => {
  const form = useCourseFormContext();
  const { data: tutors } = useQuery({
    queryKey: ['tutors'],
    queryFn: () => listUsers('tutor'),
    select: (tutors) => {
      return tutors?.map(({ id, first_name, last_name }) => ({
        value: String(id!),
        label: `${first_name} ${last_name}`,
      }));
    },
  });
  return (
    <Select
      label="Tutor"
      data={tutors!}
      {...form.getInputProps('tutor_id')}
      searchable
      withAsterisk
    />
  );
};

export default TutorInput;
