import { Checkbox, Group, Paper } from '@mantine/core';
import IssueFilterSelect from '../../components/search/issues/IssueFilterSelect';
import TutorOnly from '../../auth/TutorOnly';
import { useFilterContext } from '../../context/IssueFilterContext';

const FilterBar = () => {
  const { isAssignee, setIsAssignee } = useFilterContext();
  return (
    <Paper p="xs">
      <Group justify="end" grow>
        <TutorOnly>
          <Group>
            <Checkbox
              checked={isAssignee!}
              onChange={() => setIsAssignee(!isAssignee)}
              label="MIR ZUGEWIESEN"
            />
          </Group>
        </TutorOnly>
        <Group justify="end">
          <IssueFilterSelect />
        </Group>
      </Group>
    </Paper>
  );
};

export default FilterBar;
