import { Stack, TextInput } from '@mantine/core';
import { CourseFormProvider, useCourseForm } from './context';
import TutorInput from './TutorInput';
import SubmitButton from '../../components/buttons/SubmitButton';

const CourseForm = () => {
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
  return (
    <CourseFormProvider form={form}>
      <form>
        <Stack>
          <TextInput label="Code" {...form.getInputProps('code')} />
          <TextInput label="Bezeichnung" {...form.getInputProps('title')} />
          <TutorInput />
          <SubmitButton>Speichern</SubmitButton>
        </Stack>
      </form>
    </CourseFormProvider>
  );
};

export default CourseForm;
