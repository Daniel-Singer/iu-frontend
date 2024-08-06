import { Modal, Text } from '@mantine/core';
import IssueDetailsForm from '../../forms/issue/IssueDetailsForm';

interface IProps {
  open: boolean;
  toggle: () => void;
}

const IssueEditModal = ({ open, toggle }: IProps) => {
  return (
    <Modal
      opened={open}
      onClose={toggle}
      title={<Text c="blue">FEHLERMELDUNG BEARBEITEN</Text>}
    >
      <IssueDetailsForm toggle={toggle} />
    </Modal>
  );
};

export default IssueEditModal;
