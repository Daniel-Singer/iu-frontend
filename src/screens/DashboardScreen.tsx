import ScreenHeader from '../components/screen/ScreenHeader';
import AddButton from '../components/buttons/AddButton';
import IssueModal from '../modals/issues/IssueModal';
import { useState } from 'react';

const DashboardScreen = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      <IssueModal open={open} onClose={() => setOpen(!open)} />
      <ScreenHeader label="Dashboard">
        <AddButton onClick={() => setOpen(!open)}>Anlegen</AddButton>
      </ScreenHeader>
    </>
  );
};

export default DashboardScreen;
