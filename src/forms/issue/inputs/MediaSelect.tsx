import { Select } from '@mantine/core';
import { useIssueFormContext } from '../context';

interface IMediaType {
  value: string;
  label: string;
}

const mediaTypes: IMediaType[] = [
  {
    value: '1',
    label: 'Skript/PDF',
  },
  {
    value: '2',
    label: 'Learning App',
  },
  {
    value: '3',
    label: 'Video',
  },
  {
    value: '4',
    label: 'Lernplattform',
  },
  {
    value: '5',
    label: 'Audio',
  },
];

const MediaSelect = () => {
  const form = useIssueFormContext();
  return (
    <Select
      data={mediaTypes.map(({ value, label }) => ({ value, label }))}
      label="Medientyp"
      {...form.getInputProps('media_type')}
    />
  );
};

export default MediaSelect;
