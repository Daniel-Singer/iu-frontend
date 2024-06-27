import { Select } from '@mantine/core';
import { useIssueFormContext } from '../context';

interface IMediaType {
  value: string;
  label: string;
}

const mediaTypes: IMediaType[] = [
  {
    value: 'pdf',
    label: 'Skript/PDF',
  },
  {
    value: 'app',
    label: 'Learning App',
  },
  {
    value: 'video',
    label: 'Video',
  },
  {
    value: 'mycampus',
    label: 'MyCampus',
  },
  {
    value: 'audio',
    label: 'Audio',
  },
];

const MediaSelect = () => {
  const form = useIssueFormContext();
  return (
    <>
      <Select
        data={mediaTypes.map(({ value, label }) => ({ value, label }))}
        label="Medientyp"
        {...form.getInputProps('media_type')}
      />
    </>
  );
};

export default MediaSelect;
