import { Select } from '@mantine/core';
import { IconAdjustments } from '@tabler/icons-react';

const filters = [
  {
    value: '1',
    label: 'Eingereicht',
  },
  {
    value: '2',
    label: 'In Bearbeitung',
  },
  {
    value: '3',
    label: 'Abgeschlossen',
  },
  {
    value: '4',
    label: 'Abgelehnt',
  },
  {
    value: '5',
    label: 'Ausgesetzt',
  },
];

const IssueFilterSelect = () => {
  return (
    <Select
      data={filters}
      leftSection={<IconAdjustments size={18} />}
      placeholder="Nach Status filtern"
    />
  );
};

export default IssueFilterSelect;
