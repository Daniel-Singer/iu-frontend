import { Modal, Text } from '@mantine/core';
import { useModalContext } from '../../context/ModalContext';
import UserForm from '../../forms/user/UserForm';

const UserModal = () => {
  const { open, toggleModal } = useModalContext();
  const handleClose = () => {
    toggleModal();
  };
  return (
    <Modal
      opened={open}
      onClose={handleClose}
      title={<Text c="blue">NEUER USER</Text>}
    >
      <UserForm />
    </Modal>
  );
};

export default UserModal;
