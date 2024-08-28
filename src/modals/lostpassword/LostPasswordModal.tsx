import { Alert, Modal, Space, Text } from '@mantine/core';
import { useModalContext } from '../../context/ModalContext';

const LostPasswordModal = () => {
  const { open, toggleModal } = useModalContext();
  return (
    <Modal
      centered
      opened={open}
      onClose={toggleModal}
      title={<Text c="dimmed">NEUES PASSWORT</Text>}
    >
      <Alert color="red">
        <Text c="red">
          Bitte kontaktiere die Universität über MyCampus um einen Antrag auf
          ein neues Passwort zu stellen.
        </Text>
      </Alert>
      <Space h="lg" />
      <Text>Vielen Dank!</Text>
      <Text>Dein Korrekturmanagement-Team</Text>
    </Modal>
  );
};

export default LostPasswordModal;
