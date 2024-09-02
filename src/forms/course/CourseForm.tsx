import { Stack, Switch, TextInput } from '@mantine/core';
import { CourseFormProvider, useCourseForm } from './context';
import TutorInput from './TutorInput';
import SubmitButton from '../../components/buttons/SubmitButton';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createCourse } from '../../queries/courses/createCourse';
import { useModalContext } from '../../context/ModalContext';
import { showNotification } from '../../helpers/notifications/showNotification';
import { useCourseActions } from '../../hooks/course/useCourseActions';
import { useEffect, useMemo } from 'react';
import { updateCourse } from '../../queries/courses/updateCourse';
import { useParams } from 'react-router-dom';

const CourseForm = () => {
  const { toggleModal } = useModalContext();
  const queryClient = useQueryClient();
  const { course, isSuccess } = useCourseActions();
  const params = useParams();

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

  const { mutate: update } = useMutation({
    mutationFn: updateCourse,
    onSuccess: (course) => {
      toggleModal();
      form.reset();
      queryClient.invalidateQueries({
        queryKey: ['courses'],
      });
      queryClient.invalidateQueries({
        queryKey: ['course'],
      });
      showNotification(
        'success',
        'KURS',
        `Update für Kurs ${course.code} erfolgreich`
      );
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
      const { code, title, tutor, active } = course;
      form.setValues({ code, title, tutor_id: String(tutor.id), active });
      form.resetDirty();
    }
  }, [course, isSuccess]);

  const isUpdate = useMemo(() => !!course && !!course.id, [course]);

  const handleSubmit = (values: ICourseCreate) => {
    if (!isUpdate) {
      addCourse(values);
    } else {
      update({ id: params?.id!, update: values });
    }
  };

  return (
    <CourseFormProvider form={form}>
      <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
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
          <Switch
            label={form.values.active ? 'Aktiv' : 'Deaktiviert'}
            checked={form.values.active}
            description="Das Einreichen von Fehlermeldung, Kommentaren usw. ist nicht möglich wenn Kurs nicht aktiv ist"
            onChange={(e) =>
              form.setFieldValue('active', e.currentTarget.checked)
            }
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
