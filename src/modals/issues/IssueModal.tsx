import { Modal } from '@mantine/core';

interface IProps {
  open: boolean;
  onClose: () => void;
}

const IssueModal = ({ open, onClose }: IProps) => {
  return (
    <Modal opened={open} onClose={onClose} title="Neue Fehlermeldung"></Modal>
  );
};

export default IssueModal;
