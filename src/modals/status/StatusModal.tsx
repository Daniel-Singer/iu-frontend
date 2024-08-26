import { Modal, Text } from '@mantine/core';
import { useModalContext } from '../../context/ModalContext';
import StatusForm from '../../forms/status/StatusForm';

const StatusModal = () => {
  const { open, toggleModal } = useModalContext();

  return (
    <Modal
      opened={open}
      onClose={toggleModal}
      title={<Text c="blue">STATUS ÄNDERN</Text>}
    >
      <StatusForm />
    </Modal>
  );
};

export default StatusModal;
