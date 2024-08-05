import { Modal, Text } from '@mantine/core';
import CommentForm from '../../forms/comment/CommentForm';

interface IProps {
  open: boolean;
  toggle: () => void;
}

const CommentModal = ({ open, toggle }: IProps) => {
  return (
    <Modal
      opened={open}
      onClose={toggle}
      title={
        <Text size="sm" c="blue">
          KOMMENTAR ERSTELLEN
        </Text>
      }
    >
      <CommentForm toggle={toggle} />
    </Modal>
  );
};

export default CommentModal;
