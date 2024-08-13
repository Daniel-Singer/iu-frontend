import ScreenHeader from '../components/screen/ScreenHeader';
import { Grid, Group, Text } from '@mantine/core';
import SubmitButton from '../components/buttons/SubmitButton';
import DeleteButton from '../components/buttons/DeleteButton';
import DetailsCard from '../layout/card/DetailsCard';
import { useCourseActions } from '../hooks/course/useCourseActions';
import CourseIssuesTable from '../tables/courses/CourseIssueTable';

const CourseDetailsScreen = () => {
  const { removeCourse, course } = useCourseActions();

  return (
    <>
      <ScreenHeader label="kursdetails" />
      <Grid>
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
              <DeleteButton onClick={() => removeCourse(course?.id!)}>
                Löschen
              </DeleteButton>
            </Group>
          </DetailsCard>
        </Grid.Col>
        <Grid.Col span={8}></Grid.Col>
      </Grid>
      <ScreenHeader label="Für diesen Kurs gemeldete Fehler" />
      <CourseIssuesTable />
    </>
  );
};

export default CourseDetailsScreen;
