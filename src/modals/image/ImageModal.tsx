import { Alert, Group, Image, Modal, Stack, Text } from '@mantine/core';
import { useModalContext } from '../../context/ModalContext';
import { useLocation, useNavigate } from 'react-router-dom';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { downloadMedia } from '../../queries/media/downloadMedia';
import DeleteButton from '../../components/buttons/DeleteButton';
import { deleteMediaFile } from '../../queries/media/deleteMediaFile';
import { showNotification } from '../../helpers/notifications/showNotification';
import { useMemo } from 'react';

interface IProps {
  imgUrl: string;
}

const ImageModal = ({ imgUrl }: IProps) => {
  const { toggleModal, open } = useModalContext();
  const queryClient = useQueryClient();

  const navigate = useNavigate();
  const location = useLocation();

  const mediaId = useMemo(() => {
    return location.search?.split('=')[1];
  }, [location]);

  const { data } = useQuery({
    queryKey: ['img_url'],
    queryFn: () => downloadMedia(mediaId!),
    enabled: !!mediaId && open,
    retry: false,
  });

  const { mutate: deleteFile } = useMutation({
    mutationFn: deleteMediaFile,
    onSuccess: () => {
      navigate(location.pathname, { replace: true });
      showNotification('success', 'DATEI', 'Datei erfolgreich entfernt');
      queryClient.removeQueries({
        queryKey: ['issue_media'],
      });
      toggleModal();
    },
  });

  const handleClose = () => {
    navigate(location.pathname, { replace: true });
    queryClient.removeQueries({ queryKey: ['img_url'] });
    URL.revokeObjectURL(imgUrl);
    // remove query string
    toggleModal();
  };

  return (
    <Modal opened={open} onClose={handleClose} size="xl">
      {data?.imgUrl ? (
        <Stack>
          <Image src={data?.imgUrl} />
          <Group>
            <DeleteButton onClick={() => deleteFile(mediaId!)}>
              Datei Löschen
            </DeleteButton>
          </Group>
        </Stack>
      ) : (
        <Alert color="red" m="xs">
          <Text c="red" size="sm">
            Die von Ihnen gesuchte Datei konnte nicht gefunden werden
          </Text>
        </Alert>
      )}
    </Modal>
  );
};

export default ImageModal;
