import { Anchor, Table, Text } from '@mantine/core';
import { useMutation } from '@tanstack/react-query';
import { downloadDocument } from '../../queries/documents/downloadDocument';

interface IProps {
  children: string;
}

const FileRow = ({ children }: IProps) => {
  const { mutate: download } = useMutation({
    mutationFn: downloadDocument,
    onSuccess: (data) => {
      const file = new Blob([data], { type: 'application/pdf' });
      const fileUrl = URL.createObjectURL(file);
      window.open(fileUrl, '_blank');
    },
  });
  return (
    <Table.Td>
      <Anchor onClick={() => download(children!)}>
        <Text size="sm">{children}</Text>
      </Anchor>
    </Table.Td>
  );
};

export default FileRow;
