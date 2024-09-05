import { Select } from '@mantine/core';
import { useIssueFormContext } from '../context';
import { mediaTypes } from '../../../constants/media';
import { useMemo } from 'react';

const MediaSelect = () => {
  const form = useIssueFormContext();
  const filteredMediaTypes = useMemo(() => {
    if (form.values.category_id === '5') {
      return mediaTypes.filter(({ value }) => value === 'video');
    } else if (form.values.category_id === '3') {
      return mediaTypes.filter(({ value }) => value === 'audio');
    } else {
      return mediaTypes;
    }
  }, [form.values.category_id]);
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
        data={filteredMediaTypes.map(({ value, label }) => ({ value, label }))}
        label="Medientyp"
        value={form.values.issue_media.media_type}
        onChange={(value) => handleChange(value!)}
      />
    </>
  );
};

export default MediaSelect;
