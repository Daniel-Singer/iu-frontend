import { useLocation } from 'react-router-dom';
import ScreenHeader from '../components/screen/ScreenHeader';
import SearchBar from '../components/search/SearchBar';
import { ModalProvider } from '../context/ModalContext';
import { SearchProvider } from '../context/SearchContext';
import StudentModal from '../modals/student/StudentModal';
import UsersTable from '../tables/users/UsersTable';

interface IHeaderLabel {
  [key: string]: string;
}

const headerLabel: IHeaderLabel = {
  student: 'Studentenübersicht',
  tutor: 'Tutorenübersicht',
};

const UsersScreen = () => {
  const location = useLocation();
  return (
    <SearchProvider>
      <ModalProvider>
        <StudentModal />
        <ScreenHeader label={headerLabel[location.search.split('=')[1]]}>
          <SearchBar />
        </ScreenHeader>
        <UsersTable role={location.search.split('=')[1]} />
      </ModalProvider>
    </SearchProvider>
  );
};

export default UsersScreen;
