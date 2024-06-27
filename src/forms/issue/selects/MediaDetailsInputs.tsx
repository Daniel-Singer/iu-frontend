import { ReactNode } from 'react';
import { useIssueFormContext } from '../context';
import { NumberInput, SimpleGrid, TextInput } from '@mantine/core';

interface IMediaDetail {
  [key: string]: ReactNode;
}

const MediaDetailsInputs = () => {
  const form = useIssueFormContext();

  const mediaDetailInputs: IMediaDetail = {
    pdf: (
      <SimpleGrid cols={2}>
        <NumberInput label="Seite" min={1} />
        <NumberInput label="Zeile" min={1} />
      </SimpleGrid>
    ),
    app: (
      <SimpleGrid cols={2}>
        <NumberInput label="Seite" min={1} />
        <NumberInput label="Zeile" min={1} />
      </SimpleGrid>
    ),
    video: (
      <SimpleGrid cols={2}>
        <TextInput label="Titel" />
        <NumberInput label="Zeitstempel" />
      </SimpleGrid>
    ),
    mycampus: (
      <SimpleGrid cols={2}>
        <NumberInput label="URL" />
      </SimpleGrid>
    ),
    audio: (
      <SimpleGrid cols={2}>
        <TextInput label="Titel" />
        <NumberInput label="Zeitstempel" />
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
