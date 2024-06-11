import { Select, Stack, TextInput, Textarea } from '@mantine/core';

const IssueForm = () => {
  return (
    <form>
      <Stack>
        <Select label="Kategorie" data={[]} withAsterisk />
        <TextInput label="Kurzbeschreibung" withAsterisk />
        <Textarea label="Beschreibung" withAsterisk minRows={5} autosize />
      </Stack>
    </form>
  );
};

export default IssueForm;
