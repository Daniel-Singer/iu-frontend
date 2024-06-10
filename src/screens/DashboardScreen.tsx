import { Group } from '@mantine/core';
import ScreenHeader from '../components/screen/ScreenHeader';
import AddButton from '../components/buttons/AddButton';

const DashboardScreen = () => {
  return (
    <>
      <ScreenHeader>Dashboard</ScreenHeader>
      <Group>
        <AddButton>Anlegen</AddButton>
      </Group>
    </>
  );
};

export default DashboardScreen;
