import { useQuery, useQueryClient } from '@tanstack/react-query';
import ScreenHeader from '../components/screen/ScreenHeader';
import { useParams } from 'react-router-dom';
import { getCourse } from '../queries/courses/getCourse';
import { useEffect } from 'react';

const CourseDetailsScreen = () => {
  const params = useParams();

  const queryClient = useQueryClient();

  const { data: course } = useQuery({
    queryKey: ['course'],
    queryFn: () => getCourse(params?.id!),
    enabled: !!params.id,
  });

  useEffect(() => {
    return () => queryClient.removeQueries({ queryKey: ['course'] });
  }, []);

  return (
    <>
      <ScreenHeader
        label={course?.title ? `${course.code} - ${course.title}` : ''}
      />
    </>
  );
};

export default CourseDetailsScreen;
