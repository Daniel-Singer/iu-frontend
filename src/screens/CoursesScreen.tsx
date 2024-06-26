import ScreenHeader from '../components/screen/ScreenHeader';
import CoursesTable from '../tables/courses/CoursesTable';

const CoursesScreen = () => {
  return (
    <>
      <ScreenHeader label="Kurse" />
      <CoursesTable />
    </>
  );
};

export default CoursesScreen;
