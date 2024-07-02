import { Stack, TextInput } from '@mantine/core';
import { CourseFormProvider, useCourseForm } from './context';
import TutorInput from './TutorInput';
import SubmitButton from '../../components/buttons/SubmitButton';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createCourse } from '../../queries/courses/createCourse';
import { useModalContext } from '../../context/ModalContext';
import { showNotification } from '../../helpers/notifications/showNotification';

const CourseForm = () => {
  const { toggleModal } = useModalContext();
  const queryClient = useQueryClient();
  const form = useCourseForm({
    initialValues: {
      code: '',
      title: '',
      tutor_id: '',
    },
    validate: {
      code: (value) =>
        !value || value === '' ? 'Kurs Code erforderlich' : null,
      title: (value) =>
        !value || value === '' ? 'Kurs Bezeichnung erforderlich' : null,
    },
  });

  const { mutate: addCourse } = useMutation({
    mutationFn: createCourse,
    onSuccess: (course) => {
      toggleModal();
      form.reset();
      showNotification(
        'success',
        'KURS',
        `${course.code} erfolgreich hinzugefügt`
      );
      queryClient.invalidateQueries({
        queryKey: ['courses'],
      });
    },
  });
  return (
    <CourseFormProvider form={form}>
      <form onSubmit={form.onSubmit((values) => addCourse(values))}>
        <Stack>
          <TextInput
            label="Code"
            {...form.getInputProps('code')}
            data-autofocus
            withAsterisk
          />
          <TextInput
            label="Bezeichnung"
            {...form.getInputProps('title')}
            withAsterisk
          />
          <TutorInput />
          <SubmitButton>Speichern</SubmitButton>
        </Stack>
      </form>
    </CourseFormProvider>
  );
};

export default CourseForm;
