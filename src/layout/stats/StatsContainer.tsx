import { Grid } from '@mantine/core';
import { ReactNode } from 'react';

interface IProps {
  children: ReactNode;
}

const StatsContainer = ({ children }: IProps) => {
  return <Grid>{children}</Grid>;
};

export default StatsContainer;
