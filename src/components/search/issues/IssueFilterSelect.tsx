import { Select } from '@mantine/core';
import { IconAdjustments } from '@tabler/icons-react';
import { useFilterContext } from '../../../context/IssueFilterContext';

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
  const { filterValue, setFilterValue } = useFilterContext();
  return (
    <Select
      data={filters}
      leftSection={<IconAdjustments size={18} />}
      placeholder="Nach Status filtern"
      value={filterValue?.toString()!}
      onChange={(value) => setFilterValue(parseInt(value!))}
    />
  );
};

export default IssueFilterSelect;
