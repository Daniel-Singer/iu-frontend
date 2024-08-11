import { Alert } from '@mantine/core';
import { IconAlertCircle } from '@tabler/icons-react';

interface IProps {
  role: 'student' | 'tutor';
}

interface ILabelSelect {
  [key: string]: string;
}

const labelSelect: ILabelSelect = {
  student: 'Student',
  tutor: 'Tutor',
};
const NoUsersFound = ({ role }: IProps) => {
  return (
    <Alert
      icon={<IconAlertCircle size={18} />}
    >{`Kein ${labelSelect[role]} entspricht den Suchkriterien `}</Alert>
  );
};

export default NoUsersFound;
