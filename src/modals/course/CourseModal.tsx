import { Modal, Text } from '@mantine/core';
import CourseForm from '../../forms/course/CourseForm';

interface IProps {
  open: boolean;
  onClose: () => void;
}

const CourseModal = ({ open, onClose }: IProps) => {
  return (
    <Modal
      opened={open}
      onClose={onClose}
      title={<Text c="blue">NEUER KURS</Text>}
    >
      <CourseForm />
    </Modal>
  );
};

export default CourseModal;
