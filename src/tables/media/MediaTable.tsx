import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import dayjs from 'dayjs';
import { Alert, Stack, Table, Text } from '@mantine/core';
import { IconAlertCircle } from '@tabler/icons-react';

import ImageColumn from './ImageColumn';
import { getMediaFileInfo } from '../../queries/media/getMediaFileInfo';

import classes from './MediaTable.module.css';
import UploadMediaForm from '../../forms/upload/UploadMediaForm';

const MediaTable = () => {
  const params = useParams();

  const { data: media, isLoading } = useQuery({
    queryKey: ['media'],
    queryFn: () => getMediaFileInfo(params?.id!),
    enabled: !!params.id,
  });

  return (
    <Stack gap={0}>
      <UploadMediaForm />
      {media?.length! > 0 && !isLoading ? (
        <Table className={classes.table}>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Bezeichnung</Table.Th>
              <Table.Th>Typ</Table.Th>
              <Table.Th>Hochgeladen am</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {media?.map((element) => (
              <Table.Tr key={element.id!}>
                <ImageColumn media_label={element?.name!} id={element?.id!} />
                <Table.Td>{element?.mimetype!}</Table.Td>
                <Table.Td>
                  {dayjs(element?.created_at!).format('DD.MM.YYYY')}
                </Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
      ) : (
        <Alert icon={<IconAlertCircle size={18} />} mx="xs" mb="xs">
          <Text size="sm" c="blue">
            Keine Dateien für diese Fehlermeldung hinzugefügt
          </Text>
        </Alert>
      )}
    </Stack>
  );
};

export default MediaTable;
