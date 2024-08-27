import { Select } from '@mantine/core';
import { useMediaFormContext } from '../context';
import { mediaTypes } from '../../../constants/media';

const MediaSelect = () => {
  const form = useMediaFormContext();
  const handleChange = (value: string | undefined) => {
    for (const key in form.values) {
      if (key !== 'media_type') {
        //@ts-ignore
        form.setFieldValue(`${key}`, '');
      }
    }
    form.setFieldValue('media_type', value);
  };
  return (
    <Select
      label="Medientyp"
      data={mediaTypes.map(({ value, label }) => ({ value, label }))}
      onChange={(value) => handleChange(value!)}
    />
  );
};

export default MediaSelect;
