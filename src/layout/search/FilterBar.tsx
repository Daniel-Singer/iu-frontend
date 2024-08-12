import { Group, Paper } from '@mantine/core';
import IssueFilterSelect from '../../components/search/issues/IssueFilterSelect';

const FilterBar = () => {
  return (
    <Paper p="xs">
      <Group justify="end">
        <IssueFilterSelect />
      </Group>
    </Paper>
  );
};

export default FilterBar;
