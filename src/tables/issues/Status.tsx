import { MantineColor, Table, Text } from '@mantine/core';

interface IProps {
  id: number;
  label: string;
}

interface IColorMap {
  [key: number]: MantineColor;
}

const colorMap: IColorMap = {
  1: 'blue',
  2: 'orange',
  3: 'green',
  4: 'red',
};

const Status = ({ id, label }: IProps) => {
  return (
    <Table.Td>
      <Text size="sm" c={id ? colorMap[id] : 'default'}>
        {label}
      </Text>
    </Table.Td>
  );
};

export default Status;
