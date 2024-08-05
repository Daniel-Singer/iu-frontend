import { useEffect, useState } from 'react';
import {
  ActionIcon,
  Collapse,
  Divider,
  Group,
  Stack,
  Text,
  TextInput,
  Textarea,
} from '@mantine/core';
import dayjs from 'dayjs';
import { useForm } from '@mantine/form';
import { useNavigate, useParams } from 'react-router-dom';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { getIssue } from '../../queries/issues/getIssue';
import DeleteButton from '../../components/buttons/DeleteButton';
import CardRow from '../../layout/card/CardRow';
import SubmitButton from '../../components/buttons/SubmitButton';
import { deleteIssue } from '../../queries/issues/deleteIssue';
import { showNotification } from '../../helpers/notifications/showNotification';
import { updateIssue } from '../../queries/issues/updateIssue';
import CommentButton from '../../components/buttons/CommentButton';
import { useModalContext } from '../../context/ModalContext';
import { IconChevronDown } from '@tabler/icons-react';

const IssueDetailsForm = () => {
  const params = useParams();

  const navigate = useNavigate();

  const queryClient = useQueryClient();

  const { toggleModal } = useModalContext();

  const [showDetails, setShowDetails] = useState<boolean>(false);

  const form = useForm({
    initialValues: {
      title: '',
      description: '',
    },
  });

  // get issue data from database
  const {
    data: issue,
    isSuccess,
    isLoading,
  } = useQuery({
    queryKey: ['issue'],
    queryFn: () => getIssue(params.id!),
    enabled: !!params.id,
  });

  // update issue in database
  const { mutate: update } = useMutation({
    mutationFn: updateIssue,
    onSuccess: (issue) => {
      queryClient.invalidateQueries({
        queryKey: ['my_issues'],
      });
      queryClient.invalidateQueries({
        queryKey: ['issue'],
      });
      showNotification(
        'success',
        'UPDATE!',
        `Update für ${issue?.title} erfolgreich`
      );
      form.resetDirty();
    },
  });

  // remove issue from database
  const { mutate: remove } = useMutation({
    mutationFn: deleteIssue,
    onSuccess: (issue) => {
      navigate('/');
      queryClient.invalidateQueries({
        queryKey: ['my_issues'],
      });
      showNotification(
        'success',
        'ERFOLG!',
        `${issue.title} erfolgreich gelöscht`
      );
    },
  });

  useEffect(() => {
    if (isSuccess) {
      form.setFieldValue('title', issue.title);
      form.setFieldValue('description', issue.description);

      form.resetDirty();
    }
  }, [isSuccess]);

  return (
    <form
      onSubmit={form.onSubmit((values) =>
        update({ id: issue?.id!, update: values })
      )}
    ></form>
  );
};

export default IssueDetailsForm;
