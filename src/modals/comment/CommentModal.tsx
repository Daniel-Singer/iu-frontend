import { Modal, Text } from '@mantine/core';
import { useModalContext } from '../../context/ModalContext';
import CommentForm from '../../forms/comment/CommentForm';

const CommentModal = () => {
  const { open, toggleModal } = useModalContext();
  return (
    <Modal
      opened={open}
      onClose={toggleModal}
      title={
        <Text size="sm" c="blue">
          KOMMENTAR ERSTELLEN
        </Text>
      }
    >
      <CommentForm />
    </Modal>
  );
};

export default CommentModal;
