import { FileInput } from '@mantine/core';
import { IconPaperclip } from '@tabler/icons-react';

interface IProps {
  form: any;
}

const FileSelect = ({ form }: IProps) => {
  if (
    form.values.issue_media.media_type !== 'video' &&
    form.values.issue_media.media_type !== 'audio' &&
    form.values.issue_media.media_type
  ) {
    return (
      <FileInput
        label="Datei anhängen"
        leftSection={<IconPaperclip size={18} />}
        accept={'image/jpeg, image/png'}
        {...form.getInputProps('attached_file')}
      />
    );
  }
  return null;
};

export default FileSelect;
