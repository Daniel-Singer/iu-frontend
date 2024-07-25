import ScreenHeader from '../components/screen/ScreenHeader';
import AddButton from '../components/buttons/AddButton';
import IssueModal from '../modals/issues/IssueModal';
import IssuesTable from '../tables/issues/IssuesTable';
import { useModalContext } from '../context/ModalContext';
import SearchBar from '../components/search/SearchBar';
import WelcomeUser from '../layout/dashboard/WelcomeUser';
import StatsContainer from '../layout/stats/StatsContainer';
import UnseenComments from '../components/stats/dashboard/UnseenComments';
import UnseenMessages from '../components/stats/dashboard/UnseenMessages';

// TODO - Logik für Searchbar einbinden
const DashboardScreen = () => {
  const { open, toggleModal } = useModalContext();
  return (
    <>
      <IssueModal open={open} onClose={toggleModal} />
      <ScreenHeader label="Dashboard">
        <SearchBar />
        <AddButton onClick={toggleModal}>Neue Meldung</AddButton>
      </ScreenHeader>
      <WelcomeUser />
      <StatsContainer>
        <UnseenComments />
        <UnseenMessages />
      </StatsContainer>
      <IssuesTable />
    </>
  );
};

export default DashboardScreen;
