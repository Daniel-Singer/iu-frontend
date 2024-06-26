import ScreenHeader from '../components/screen/ScreenHeader';
import AddButton from '../components/buttons/AddButton';
import IssueModal from '../modals/issues/IssueModal';
import IssuesTable from '../tables/issues/IssuesTable';
import { useModalContext } from '../context/ModalContext';

const DashboardScreen = () => {
  const { open, toggleModal } = useModalContext();
  return (
    <>
      <IssueModal open={open} onClose={toggleModal} />
      <ScreenHeader label="Dashboard">
        <AddButton onClick={toggleModal}>Anlegen</AddButton>
      </ScreenHeader>
      <IssuesTable />
    </>
  );
};

export default DashboardScreen;
