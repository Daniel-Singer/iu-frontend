import { Group, Paper, Stack, Text } from '@mantine/core';
import StatsCard from '../../../layout/stats/StatsCard';
import StatsLabel from '../../../layout/stats/StatsLabel';
import { IconMessage } from '@tabler/icons-react';

const UnseenMessages = () => {
  return (
    <StatsCard>
      <Paper p="xs">
        <Stack>
          <StatsLabel icon={<IconMessage />}>Nachrichten</StatsLabel>
          <Group justify="space-between">
            <Text>Neu</Text>
            <Text>0</Text>
          </Group>
        </Stack>
      </Paper>
    </StatsCard>
  );
};

export default UnseenMessages;
