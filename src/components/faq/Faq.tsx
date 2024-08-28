import {
  ActionIcon,
  Box,
  Collapse,
  Divider,
  Group,
  Space,
  Text,
} from '@mantine/core';
import { IconChevronDown, IconChevronUp } from '@tabler/icons-react';
import { useState } from 'react';

interface IProps extends IFaqReceive {
  index: number;
}

const Faq = ({ index, question, answer }: IProps) => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      {index > 0 ? <Divider /> : null}
      <Box p="xs">
        <Group>
          <ActionIcon
            color="gray"
            variant="light"
            onClick={() => setOpen(!open)}
          >
            {open ? <IconChevronUp size={20} /> : <IconChevronDown size={20} />}
          </ActionIcon>
          <Text>{question}</Text>
        </Group>
        <Collapse in={open}>
          <Space h="lg" />
          <Text c="dimmed">{answer}</Text>
        </Collapse>
      </Box>
    </>
  );
};

export default Faq;
