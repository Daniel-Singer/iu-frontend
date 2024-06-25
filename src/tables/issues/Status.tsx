import { Table, Text } from '@mantine/core';

interface IProps {
  children: string;
}

const Status = ({ children }: IProps) => {
  return (
    <Table.Td>
      <Text size="sm" c={children ? 'default' : 'red'}>
        {children ? children : 'k.A.'}
      </Text>
    </Table.Td>
  );
};

export default Status;
