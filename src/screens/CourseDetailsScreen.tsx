import { useQuery } from '@tanstack/react-query';
import ScreenHeader from '../components/screen/ScreenHeader';
import { useParams } from 'react-router-dom';
import { getCourse } from '../queries/courses/getCourse';

const CourseDetailsScreen = () => {
  const params = useParams();

  const { data: course } = useQuery({
    queryKey: ['course'],
    queryFn: () => getCourse(params?.id!),
    enabled: !!params.id,
  });

  return (
    <>
      <ScreenHeader label={course?.title ?? ''} />
    </>
  );
};

export default CourseDetailsScreen;
