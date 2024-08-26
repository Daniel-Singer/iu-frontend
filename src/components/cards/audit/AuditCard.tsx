import { Group } from '@mantine/core';
import CommentButton from '../../buttons/CommentButton';
import TimelineTabs from '../../timeline/TimelineTabs';
import CommentModal from '../../../modals/comment/CommentModal';
import { useModalContext } from '../../../context/ModalContext';

const AuditCard = () => {
  const { toggleModal } = useModalContext();
  return (
    <>
      <CommentModal />
      <Group>
        <CommentButton onClick={toggleModal} color="blue">
          Kommentieren
        </CommentButton>
      </Group>
      <TimelineTabs />
    </>
  );
};

export default AuditCard;
