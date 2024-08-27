import { createFormContext } from '@mantine/form';

export type TMediaFormValues = Omit<IIssueMediaBase, 'mimetype'> & {
  id?: any;
  issue_id: string | undefined;
};

export const [MediaFormProvider, useMediaFormContext, useMediaForm] =
  createFormContext<TMediaFormValues>();
