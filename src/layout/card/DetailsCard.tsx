import { Paper, Stack } from '@mantine/core';
import CardRow from './CardRow';
import { ReactNode } from 'react';

interface ICardData {
  label: string;
  value: any;
}

interface IProps {
  span?: number;
  data: ICardData[];
  children?: ReactNode;
  loading?: boolean;
}

const DetailsCard = ({ span = 2, data, children, loading }: IProps) => {
  return (
    <Paper p="sm">
      <Stack>
        {data?.map((item) => (
          <CardRow
            span={span}
            key={`item_${item.label}`}
            label={item.label}
            value={item.value}
            loading={loading}
          />
        ))}
        {children}
      </Stack>
    </Paper>
  );
};

export default DetailsCard;
