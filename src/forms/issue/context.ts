import { createFormContext } from '@mantine/form';

export const [IssueFormProvider, useIssueFormContext, useIssueForm] =
  createFormContext<IIssueCreate>();

export const [
  IssueDetailsFormProvider,
  useIssueDetailsFormContext,
  useIssueDetailsForm,
] =
  createFormContext<Pick<IIssueReceive, 'title' | 'description' | 'status'>>();
