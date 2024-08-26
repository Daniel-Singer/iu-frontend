import { Modal, Text } from '@mantine/core';
import { useModalContext } from '../../context/ModalContext';

const StatusModal = () => {
  const { open, toggleModal } = useModalContext();

  return (
    <Modal
      opened={open}
      onClose={toggleModal}
      title={<Text c="blue">STATUS ÄNDERN</Text>}
    ></Modal>
  );
};

export default StatusModal;
