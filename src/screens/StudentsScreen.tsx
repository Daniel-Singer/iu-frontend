import ScreenHeader from '../components/screen/ScreenHeader';
import SearchBar from '../components/search/SearchBar';
import { SearchProvider } from '../context/SearchContext';
import StudentsTable from '../tables/students/StudentsTable';

const StudentsScreen = () => {
  return (
    <SearchProvider>
      <ScreenHeader label="Studentenübersicht">
        <SearchBar />
      </ScreenHeader>
      <StudentsTable />
    </SearchProvider>
  );
};

export default StudentsScreen;
