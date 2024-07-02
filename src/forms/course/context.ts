import { createFormContext } from '@mantine/form';

export const [CourseFormProvider, useCourseFormContext, useCourseForm] =
  createFormContext<ICourseCreate>();
