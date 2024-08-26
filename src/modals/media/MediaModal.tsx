import { Modal, Text } from '@mantine/core';
import { useModalContext } from '../../context/ModalContext';

const MediaModal = () => {
  const { open, toggleModal } = useModalContext();

  return (
    <Modal
      opened={open}
      onClose={toggleModal}
      title={<Text c="blue">MEDIUM BEARBEITEN</Text>}
    ></Modal>
  );
};

export default MediaModal;
