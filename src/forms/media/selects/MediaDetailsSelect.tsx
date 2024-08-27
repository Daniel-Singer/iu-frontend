import { ReactNode } from 'react';
import { NumberInput, SimpleGrid, TextInput } from '@mantine/core';
import { TimeInput } from '@mantine/dates';
import { useMediaFormContext } from '../context';

interface IMediaDetail {
  [key: string]: ReactNode;
}

const MediaDetailsInputs = () => {
  const form = useMediaFormContext();

  const mediaDetailInputs: IMediaDetail = {
    pdf: (
      <SimpleGrid cols={2}>
        <NumberInput label="Seite" min={1} {...form.getInputProps('page')} />
        <NumberInput label="Zeile" min={1} {...form.getInputProps('line')} />
      </SimpleGrid>
    ),
    app: (
      <TextInput label="Kapitel" min={1} {...form.getInputProps('chapter')} />
    ),
    video: (
      <SimpleGrid cols={2}>
        <TextInput label="Titel" {...form.getInputProps('label')} />
        <TimeInput
          withSeconds
          label="Zeitstempel"
          {...form.getInputProps('timestamp')}
        />
      </SimpleGrid>
    ),
    mycampus: <TextInput label="URL" {...form.getInputProps('url')} />,
    audio: (
      <SimpleGrid cols={2}>
        <TextInput label="Titel" {...form.getInputProps('label')} />
        <TimeInput
          withSeconds
          label="Zeitstempel"
          {...form.getInputProps('timestamp')}
        />
      </SimpleGrid>
    ),
  };
  if (form.values.media_type === '' || !form.values.media_type) {
    return null;
  } else {
    return <>{mediaDetailInputs[form.values.media_type]}</>;
  }
};

export default MediaDetailsInputs;
