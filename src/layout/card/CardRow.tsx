import { Grid, Skeleton, Text } from '@mantine/core';
import { ReactNode } from 'react';

interface IProps {
  span?: number;
  label: string;
  value: string | number | ReactNode;
  loading?: boolean;
}

const CardRow = ({ span = 2, label, value, loading }: IProps) => {
  return (
    <Grid>
      <Grid.Col span={span}>
        <Text fw={700}>{`${label}:`}</Text>
      </Grid.Col>
      <Grid.Col span={12 - span}>
        {loading ? <Skeleton h="100%" /> : value}
      </Grid.Col>
    </Grid>
  );
};

export default CardRow;
