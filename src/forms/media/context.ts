import { createFormContext } from '@mantine/form';

export const [MediaFormProvider, useMediaFormContext, useMediaForm] =
  createFormContext<IIssueMediaBase>();
