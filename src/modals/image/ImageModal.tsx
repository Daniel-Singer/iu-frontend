import { Alert, Image, Modal, Text } from '@mantine/core';
import { useModalContext } from '../../context/ModalContext';
import { useLocation, useNavigate } from 'react-router-dom';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { downloadMedia } from '../../queries/media/downloadMedia';

interface IProps {
  imgUrl: string;
}

const ImageModal = ({ imgUrl }: IProps) => {
  const { toggleModal, open } = useModalContext();
  const queryClient = useQueryClient();

  const navigate = useNavigate();
  const location = useLocation();

  const { data } = useQuery({
    queryKey: ['img_url'],
    queryFn: () => downloadMedia(location.search?.split('=')[1]),
    enabled: !!location.search.split('=')[1] && open,
    retry: false,
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
        <Image src={data?.imgUrl} />
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
