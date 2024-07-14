import { Grid } from '@mantine/core';
import { ReactNode } from 'react';

interface IProps {
  span?: number;
  children: ReactNode;
}

const StatsCard = ({ span = 3, children }: IProps) => {
  return <Grid.Col span={span}>{children}</Grid.Col>;
};

export default StatsCard;
