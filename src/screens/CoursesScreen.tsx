import { useQuery } from '@tanstack/react-query';
import AddButton from '../components/buttons/AddButton';
import ScreenHeader from '../components/screen/ScreenHeader';
import SearchBar from '../components/search/SearchBar';
import CourseCount from '../components/stats/courses/CourseCount';
import { useModalContext } from '../context/ModalContext';
import { SearchProvider } from '../context/SearchContext';
import StatsContainer from '../layout/stats/StatsContainer';
import CourseModal from '../modals/course/CourseModal';
import CoursesTable from '../tables/courses/CoursesTable';
import { listCourses } from '../queries/courses/listCourses';
import {
  IconAlertTriangle,
  IconBook,
  IconCheck,
  IconSquareRotatedForbid,
} from '@tabler/icons-react';
import { ScrollingProvider } from '../context/ScrollingContext';

const CoursesScreen = () => {
  const { toggleModal } = useModalContext();
  const { data: courses } = useQuery({
    queryKey: ['courses'],
    queryFn: listCourses,
    select: (courses) => {
      const count = courses.length;
      const issueCount = courses?.reduce((a, b) => a + b.issues.count, 0);
      const active = courses?.filter(({ active }) => active).length;
      const inactive = courses?.filter(({ active }) => !active).length;
      return {
        count,
        active,
        inactive,
        issueCount,
      };
    },
  });
  return (
    <SearchProvider>
      <ScreenHeader label="Kurse">
        <CourseModal />
        <SearchBar />
        <AddButton onClick={toggleModal}>Neuer Kurs</AddButton>
      </ScreenHeader>
      <StatsContainer>
        <CourseCount
          label="Kurse"
          value={courses?.count!}
          icon={<IconBook />}
        />
        <CourseCount
          label="Gemeldete Fehler"
          value={courses?.issueCount!}
          color={courses?.issueCount! > 0 ? 'red' : 'green'}
          icon={<IconAlertTriangle />}
        />
        <CourseCount
          label="Aktiv"
          value={courses?.active!}
          color="green"
          icon={<IconCheck />}
        />
        <CourseCount
          label="Inaktiv"
          value={courses?.inactive!}
          color="red"
          icon={<IconSquareRotatedForbid />}
        />
      </StatsContainer>
      <ScrollingProvider>
        <CoursesTable />
      </ScrollingProvider>
    </SearchProvider>
  );
};

export default CoursesScreen;
