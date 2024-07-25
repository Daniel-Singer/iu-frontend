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
  const handleChange = (value: string | undefined) => {
    for (const key in form.values.issue_media) {
      if (key !== 'media_type') {
        //@ts-ignore
        form.setFieldValue(`issue_media.${key}`, '');
      }
    }
    form.setFieldValue('issue_media.media_type', value);
  };
  return (
    <>
      <Select
        data={mediaTypes.map(({ value, label }) => ({ value, label }))}
        label="Medientyp"
        value={form.values.issue_media.media_type}
        onChange={(value) => handleChange(value!)}
      />
    </>
  );
};

export default MediaSelect;
