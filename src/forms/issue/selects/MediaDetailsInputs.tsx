import { ReactNode } from 'react';
import { useIssueFormContext } from '../context';
import { NumberInput, SimpleGrid, TextInput } from '@mantine/core';
import { TimeInput } from '@mantine/dates';

interface IMediaDetail {
  [key: string]: ReactNode;
}

const MediaDetailsInputs = () => {
  const form = useIssueFormContext();

  const mediaDetailInputs: IMediaDetail = {
    pdf: (
      <SimpleGrid cols={2}>
        <NumberInput
          label="Seite"
          min={1}
          {...form.getInputProps('issue_media.page')}
        />
        <NumberInput
          label="Zeile"
          min={1}
          {...form.getInputProps('issue_media.line')}
        />
      </SimpleGrid>
    ),
    app: (
      <TextInput
        label="Kapitel"
        min={1}
        {...form.getInputProps('issue_media.chapter')}
      />
    ),
    video: (
      <SimpleGrid cols={2}>
        <TextInput label="Titel" {...form.getInputProps('issue_media.label')} />
        <TimeInput
          withSeconds
          label="Zeitstempel"
          {...form.getInputProps('issue_media.timestamp')}
        />
      </SimpleGrid>
    ),
    mycampus: (
      <TextInput label="URL" {...form.getInputProps('issue_media.url')} />
    ),
    audio: (
      <SimpleGrid cols={2}>
        <TextInput label="Titel" {...form.getInputProps('issue_media.label')} />
        <TimeInput
          withSeconds
          label="Zeitstempel"
          {...form.getInputProps('issue_media.timestamp')}
        />
      </SimpleGrid>
    ),
  };
  if (
    form.values.issue_media.media_type === '' ||
    !form.values.issue_media.media_type
  ) {
    return null;
  } else {
    return <>{mediaDetailInputs[form.values.issue_media.media_type]}</>;
  }
};

export default MediaDetailsInputs;
