import { Modal, Text } from '@mantine/core';
import { useModalContext } from '../../context/ModalContext';
import MediaForm from '../../forms/media/MediaForm';

const MediaModal = () => {
  const { open, toggleModal } = useModalContext();

  return (
    <Modal
      opened={open}
      onClose={toggleModal}
      title={<Text c="blue">MEDIUM BEARBEITEN</Text>}
    >
      <MediaForm />
    </Modal>
  );
};

export default MediaModal;
