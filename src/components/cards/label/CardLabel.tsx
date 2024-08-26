import { Text } from '@mantine/core';

interface IProps {
  children: string;
}

const CardLabel = ({ children }: IProps) => {
  return (
    <Text size="sm" c="blue">
      {children.toUpperCase()}
    </Text>
  );
};

export default CardLabel;
