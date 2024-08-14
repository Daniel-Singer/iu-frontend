import ScreenHeader from '../components/screen/ScreenHeader';
import { Grid, Group } from '@mantine/core';
import DetailsCard from '../layout/card/DetailsCard';
import { useCourseActions } from '../hooks/course/useCourseActions';
import CourseIssuesTable from '../tables/courses/CourseIssueTable';
import EditButton from '../components/buttons/EditButton';
import { useModalContext } from '../context/ModalContext';
import CourseModal from '../modals/course/CourseModal';

const CourseDetailsScreen = () => {
  const { course } = useCourseActions();
  const { toggleModal } = useModalContext();
  return (
    <>
      <CourseModal />
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
              <EditButton onClick={toggleModal}>Bearbeiten</EditButton>
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
