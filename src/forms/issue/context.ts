import { createFormContext } from '@mantine/form';

export const [IssueFormProvider, useIssueFormContext, useIssueForm] =
  createFormContext<IIssueCreate>();
