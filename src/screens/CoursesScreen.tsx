import AddButton from '../components/buttons/AddButton';
import ScreenHeader from '../components/screen/ScreenHeader';
import SearchBar from '../components/search/SearchBar';
import { useModalContext } from '../context/ModalContext';
import CourseModal from '../modals/course/CourseModal';
import CoursesTable from '../tables/courses/CoursesTable';

const CoursesScreen = () => {
  const { toggleModal } = useModalContext();
  return (
    <>
      <ScreenHeader label="Kurse">
        <CourseModal />
        <SearchBar />
        <AddButton onClick={toggleModal}>Neuer Kurs</AddButton>
      </ScreenHeader>
      <CoursesTable />
    </>
  );
};

export default CoursesScreen;
