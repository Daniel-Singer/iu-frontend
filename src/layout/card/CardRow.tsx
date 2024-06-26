import { Grid, Text } from '@mantine/core';
import { ReactNode } from 'react';

interface IProps {
  label: string;
  value: string | number | ReactNode;
}

const CardRow = ({ label, value }: IProps) => {
  return (
    <Grid>
      <Grid.Col span={2}>
        <Text fw={700}>{`${label}:`}</Text>
      </Grid.Col>
      <Grid.Col span={10}>{value}</Grid.Col>
    </Grid>
  );
};

export default CardRow;
