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
import { SearchProvider } from '../context/SearchContext';
import FilterBar from '../layout/search/FilterBar';
import { FilterProvider } from '../context/IssueFilterContext';
import IssuesCount from '../components/stats/dashboard/IssuesCount';
import { ScrollingProvider } from '../context/ScrollingContext';

const DashboardScreen = () => {
  const { open, toggleModal } = useModalContext();
  return (
    <SearchProvider>
      <FilterProvider>
        <IssueModal open={open} onClose={toggleModal} />
        <ScreenHeader label="Dashboard">
          <SearchBar />
          <AddButton onClick={toggleModal}>Neue Meldung</AddButton>
        </ScreenHeader>
        <WelcomeUser />
        <StatsContainer>
          <IssuesCount />
          <UnseenComments />
          <UnseenMessages />
        </StatsContainer>
        <ScreenHeader label="Deine Fehlermeldungen" />
        <FilterBar />
        <ScrollingProvider>
          <IssuesTable />
        </ScrollingProvider>
      </FilterProvider>
    </SearchProvider>
  );
};

export default DashboardScreen;
