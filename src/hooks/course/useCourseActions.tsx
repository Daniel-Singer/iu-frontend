import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { deleteCourse } from '../../queries/courses/deleteCourse';
import { useNavigate, useParams } from 'react-router-dom';
import { showNotification } from '../../helpers/notifications/showNotification';
import { getCourse } from '../../queries/courses/getCourse';
import { useEffect } from 'react';

export const useCourseActions = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const params = useParams();

  // function to receive course data
  const {
    data: course,
    isLoading,
    isSuccess,
  } = useQuery({
    queryKey: ['course'],
    queryFn: () => getCourse(params?.id!),
    enabled: !!params?.id,
  });

  // function to delete course
  const { mutate: removeCourse } = useMutation({
    mutationFn: deleteCourse,
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: ['courses'],
      });
      queryClient.removeQueries({
        queryKey: ['course'],
      });
      navigate('/courses');
      showNotification(
        'success',
        'KURS',
        `${data.code} wurde erfolgreich gelöscht`
      );
    },
  });

  // removes course data from state when component is unmounted
  useEffect(() => {
    return () => queryClient.removeQueries({ queryKey: ['course'] });
  }, []);

  return {
    course,
    removeCourse,
    isLoading,
    isSuccess,
  };
};
