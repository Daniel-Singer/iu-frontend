import { Modal, Text } from '@mantine/core';
import IssueForm from '../../forms/issue/IssueForm';

interface IProps {
  open: boolean;
  onClose: () => void;
}

const IssueModal = ({ open, onClose }: IProps) => {
  return (
    <Modal
      opened={open}
      onClose={onClose}
      title={<Text c="blue">NEUE FEHLERMELDUNG</Text>}
    >
      <IssueForm />
    </Modal>
  );
};

export default IssueModal;
