import ScreenHeader from '../components/screen/ScreenHeader';
import StudentsTable from '../tables/students/StudentsTable';

const StudentsScreen = () => {
  return (
    <>
      <ScreenHeader label="Studentenübersicht"></ScreenHeader>
      <StudentsTable />
    </>
  );
};

export default StudentsScreen;
