import { MantineColor, Table, Text } from '@mantine/core';
import StatusLabel from '../../components/status/StatusLabel';

interface IProps {
  id: number;
  label: string;
}

interface IColorMap {
  [key: number]: MantineColor;
}

const colorMap: IColorMap = {
  1: 'blue',
  2: 'grape',
  3: 'green',
  4: 'red',
  5: 'orange',
};

const Status = ({ id, label }: IProps) => {
  return (
    <Table.Td>
      <StatusLabel id={id!} label={label} size="sm" />
    </Table.Td>
  );
};

export default Status;
