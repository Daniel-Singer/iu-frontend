import { useQuery, useQueryClient } from '@tanstack/react-query';
import ScreenHeader from '../components/screen/ScreenHeader';
import { useParams } from 'react-router-dom';
import { getCourse } from '../queries/courses/getCourse';
import { useEffect } from 'react';
import { Grid, Group } from '@mantine/core';
import SubmitButton from '../components/buttons/SubmitButton';
import DeleteButton from '../components/buttons/DeleteButton';
import DetailsCard from '../layout/card/DetailsCard';

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
      <Grid flex={1}>
        <Grid.Col span={4}>
          <DetailsCard
            span={4}
            data={[
              { label: 'ID', value: course?.id },
              {
                label: 'Tutor',
                value: `${course?.tutor.first_name} ${course?.tutor.last_name}`,
              },
              {
                label: 'Meldungen',
                value: course?.issues.length,
              },
            ]}
          >
            <Group justify="space-between">
              <SubmitButton disabled>Update</SubmitButton>
              <DeleteButton>Löschen</DeleteButton>
            </Group>
          </DetailsCard>
        </Grid.Col>
        <Grid.Col span={8}></Grid.Col>
      </Grid>
    </>
  );
};

export default CourseDetailsScreen;
