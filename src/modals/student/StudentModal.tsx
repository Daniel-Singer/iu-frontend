import { Modal } from '@mantine/core';
import { useModalContext } from '../../context/ModalContext';

const StudentModal = () => {
  const { open, toggleModal } = useModalContext();
  const handleClose = () => {
    toggleModal();
  };
  return <Modal opened={open} onClose={handleClose} title="Student"></Modal>;
};

export default StudentModal;
