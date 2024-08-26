import { Modal, Text } from '@mantine/core';
import CommentForm from '../../forms/comment/CommentForm';
import { useModalContext } from '../../context/ModalContext';

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
      <CommentForm toggle={toggleModal} />
    </Modal>
  );
};

export default CommentModal;
