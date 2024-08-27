import {
  Alert,
  Center,
  Group,
  Image,
  Loader,
  Modal,
  Stack,
  Text,
} from '@mantine/core';
import { useModalContext } from '../../context/ModalContext';
import { useLocation, useNavigate } from 'react-router-dom';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { downloadMedia } from '../../queries/media/downloadMedia';
import DeleteButton from '../../components/buttons/DeleteButton';
import { deleteMediaFile } from '../../queries/media/deleteMediaFile';
import { showNotification } from '../../helpers/notifications/showNotification';
import { useMemo } from 'react';
import AdminAndTutorOnly from '../../auth/AdminAndTutorOnly';

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

  const { data, isLoading, isSuccess } = useQuery({
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
        queryKey: ['media'],
      });
      toggleModal();
    },
  });

  const handleClose = () => {
    navigate(location.pathname, { replace: true });
    setTimeout(() => {
      queryClient.removeQueries({ queryKey: ['img_url'] });
      URL.revokeObjectURL(imgUrl);
    }, 500);
    toggleModal();
  };

  return (
    <Modal opened={open} onClose={handleClose} size="xl">
      {data?.imgUrl && !isLoading ? (
        <Stack>
          <Image src={data?.imgUrl} />
          {isSuccess ? (
            <AdminAndTutorOnly>
              <Group>
                <DeleteButton onClick={() => deleteFile(mediaId!)}>
                  Datei Löschen
                </DeleteButton>
              </Group>
            </AdminAndTutorOnly>
          ) : null}
        </Stack>
      ) : isLoading ? (
        <Center>
          <Loader />
        </Center>
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
