import { createFormContext } from '@mantine/form';

export type IIssueDetailsFormValues = Pick<
  IIssueReceive,
  'title' | 'description' | 'status' | 'issue_media'
> & { attached_file: any };

export const [IssueFormProvider, useIssueFormContext, useIssueForm] =
  createFormContext<IIssueCreate>();

export const [
  IssueDetailsFormProvider,
  useIssueDetailsFormContext,
  useIssueDetailsForm,
] = createFormContext<IIssueDetailsFormValues>();
