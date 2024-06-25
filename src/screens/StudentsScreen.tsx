import ScreenHeader from '../components/screen/ScreenHeader';
import SearchBar from '../components/search/SearchBar';
import { ModalProvider } from '../context/ModalContext';
import { SearchProvider } from '../context/SearchContext';
import StudentModal from '../modals/student/StudentModal';
import StudentsTable from '../tables/students/StudentsTable';

const StudentsScreen = () => {
  return (
    <SearchProvider>
      <ModalProvider>
        <StudentModal />
        <ScreenHeader label="Studentenübersicht">
          <SearchBar />
        </ScreenHeader>
        <StudentsTable />
      </ModalProvider>
    </SearchProvider>
  );
};

export default StudentsScreen;
