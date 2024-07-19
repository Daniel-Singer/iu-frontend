import ScreenHeader from '../components/screen/ScreenHeader';
import AddButton from '../components/buttons/AddButton';
import IssueModal from '../modals/issues/IssueModal';
import IssuesTable from '../tables/issues/IssuesTable';
import { useModalContext } from '../context/ModalContext';
import SearchBar from '../components/search/SearchBar';

const DashboardScreen = () => {
  const { open, toggleModal } = useModalContext();
  return (
    <>
      <IssueModal open={open} onClose={toggleModal} />
      <ScreenHeader label="Übersicht">
        <SearchBar />
        <AddButton onClick={toggleModal}>Neue Meldung</AddButton>
      </ScreenHeader>
      <IssuesTable />
    </>
  );
};

export default DashboardScreen;
