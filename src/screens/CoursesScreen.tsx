import AddButton from '../components/buttons/AddButton';
import ScreenHeader from '../components/screen/ScreenHeader';
import SearchBar from '../components/search/SearchBar';
import CoursesTable from '../tables/courses/CoursesTable';

const CoursesScreen = () => {
  return (
    <>
      <ScreenHeader label="Kurse">
        <SearchBar />
        <AddButton>Neuer Kurs</AddButton>
      </ScreenHeader>
      <CoursesTable />
    </>
  );
};

export default CoursesScreen;
