import { useState } from 'react';
import ScreenHeader from '../components/screen/ScreenHeader';
import AddButton from '../components/buttons/AddButton';
import IssueModal from '../modals/issues/IssueModal';
import IssuesTable from '../tables/issues/IssuesTable';
import { ModalProvider } from '../context/ModalContext';

const DashboardScreen = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <ModalProvider>
      <IssueModal open={open} onClose={() => setOpen(!open)} />
      <ScreenHeader label="Dashboard">
        <AddButton onClick={() => setOpen(!open)}>Anlegen</AddButton>
      </ScreenHeader>
      <IssuesTable />
    </ModalProvider>
  );
};

export default DashboardScreen;
