import { Group, Text } from '@mantine/core';

interface IProps {
  children: string;
}

const ScreenHeader = ({ children }: IProps) => {
  return (
    <Group>
      <Text c="blue">{children.toUpperCase()}</Text>
    </Group>
  );
};

export default ScreenHeader;
