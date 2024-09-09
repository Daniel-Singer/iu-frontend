import { Group, Stack, Text } from '@mantine/core';
import CommentButton from '../../buttons/CommentButton';
import TimelineTabs from '../../timeline/TimelineTabs';
import CommentModal from '../../../modals/comment/CommentModal';
import { useModalContext } from '../../../context/ModalContext';
import { useCourseContext } from '../../../context/CourseContext';

const AuditCard = () => {
  const { toggleModal } = useModalContext();
  const { active, isLoading } = useCourseContext();
  return (
    <>
      <CommentModal />
      <Stack>
        <Group>
          <CommentButton onClick={toggleModal} color="blue" disabled={!active}>
            Kommentieren
          </CommentButton>
        </Group>
        {!active && !isLoading ? (
          <Text size="sm" c="red" fw={500}>
            Kurs inaktiv. Hinzufügen von Kommentaren und Upload von Dateien
            nicht möglich
          </Text>
        ) : null}
      </Stack>
      <TimelineTabs />
    </>
  );
};

export default AuditCard;
