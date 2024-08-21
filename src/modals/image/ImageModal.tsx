import { Image, Modal } from '@mantine/core';
import { useModalContext } from '../../context/ModalContext';
import { useLocation, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { downloadMedia } from '../../queries/media/downloadMedia';

interface IProps {
  imgUrl: string;
}

const ImageModal = ({ imgUrl }: IProps) => {
  const { toggleModal, open } = useModalContext();

  const navigate = useNavigate();
  const location = useLocation();

  const { data } = useQuery({
    queryKey: ['img_url'],
    queryFn: () => downloadMedia(location.search?.split('=')[1]),
    enabled: location?.search?.split('=') !== undefined && open,
  });

  const handleClose = () => {
    URL.revokeObjectURL(imgUrl);
    // remove query string
    navigate(location.pathname, { replace: true });
    toggleModal();
  };

  return (
    <Modal opened={open} onClose={handleClose} size="xl">
      <Image src={data?.imgUrl} />
    </Modal>
  );
};

export default ImageModal;
