import { Modal, Text } from '@mantine/core';
import CourseForm from '../../forms/course/CourseForm';
import { useModalContext } from '../../context/ModalContext';

const CourseModal = () => {
  const { open, toggleModal } = useModalContext();
  return (
    <Modal
      opened={open}
      onClose={toggleModal}
      title={<Text c="blue">NEUER KURS</Text>}
    >
      <CourseForm />
    </Modal>
  );
};

export default CourseModal;
