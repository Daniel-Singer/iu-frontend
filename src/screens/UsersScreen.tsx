import { useLocation } from 'react-router-dom';
import ScreenHeader from '../components/screen/ScreenHeader';
import SearchBar from '../components/search/SearchBar';
import { useModalContext } from '../context/ModalContext';
import { SearchProvider } from '../context/SearchContext';
import UsersTable from '../tables/users/UsersTable';
import AddButton from '../components/buttons/AddButton';
import UserModal from '../modals/user/UserModal';
import { ScrollingProvider } from '../context/ScrollingContext';

interface IHeaderLabel {
  [key: string]: string;
}

const headerLabel: IHeaderLabel = {
  student: 'Studentenübersicht',
  tutor: 'Tutorenübersicht',
};

const UsersScreen = () => {
  const location = useLocation();
  const { toggleModal } = useModalContext();
  return (
    <SearchProvider>
      <UserModal />
      <ScreenHeader label={headerLabel[location.search.split('=')[1]]}>
        <SearchBar />
        <AddButton onClick={toggleModal}>Neuer User</AddButton>
      </ScreenHeader>
      <ScrollingProvider>
        <UsersTable role={location.search.split('=')[1]} />
      </ScrollingProvider>
    </SearchProvider>
  );
};

export default UsersScreen;
