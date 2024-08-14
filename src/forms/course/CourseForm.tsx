import { Checkbox, Stack, TextInput } from '@mantine/core';
import { CourseFormProvider, useCourseForm } from './context';
import TutorInput from './TutorInput';
import SubmitButton from '../../components/buttons/SubmitButton';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createCourse } from '../../queries/courses/createCourse';
import { useModalContext } from '../../context/ModalContext';
import { showNotification } from '../../helpers/notifications/showNotification';
import { useCourseActions } from '../../hooks/course/useCourseActions';
import { useEffect, useMemo } from 'react';

const CourseForm = () => {
  const { toggleModal } = useModalContext();
  const queryClient = useQueryClient();
  const { course, isSuccess } = useCourseActions();
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

  const form = useCourseForm({
    initialValues: {
      code: '',
      title: '',
      tutor_id: '',
      active: true,
    },
    validate: {
      code: (value) =>
        !value || value === '' ? 'Kurs Code erforderlich' : null,
      title: (value) =>
        !value || value === '' ? 'Kurs Bezeichnung erforderlich' : null,
    },
  });

  useEffect(() => {
    if (course && isSuccess) {
      const { code, title, tutor } = course;
      form.setValues({ code, title, tutor_id: String(tutor.id) });
      form.resetDirty();
    }
  }, [course, isSuccess]);

  const isUpdate = useMemo(() => !!course && !!course.id, [course]);

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
          <Checkbox
            label="Kurs aktiv"
            {...form.getInputProps('active', { type: 'checkbox' })}
          />
          <SubmitButton disabled={!form.isDirty() && isUpdate}>
            {isUpdate ? 'Update' : 'Speichern'}
          </SubmitButton>
        </Stack>
      </form>
    </CourseFormProvider>
  );
};

export default CourseForm;
