import { Group, Space, Stack, Switch } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useEffect } from 'react';

interface IProps {
  active: boolean;
}

const ActivateUserForm = ({ active }: IProps) => {
  const form = useForm({
    initialValues: {
      active: false,
    },
  });

  useEffect(() => {
    if (active) {
      form.setFieldValue('active', active);
      form.resetDirty();
    }
  }, [active]);
  return (
    <form>
      <Stack>
        <Switch
          label="Aktiv"
          checked={form.values.active}
          onChange={() => form.setFieldValue('active', !form.values.active)}
          description="Ist User Inaktiv, kann dieser nicht auf die Plattform zugreifen"
        />
      </Stack>
    </form>
  );
};

export default ActivateUserForm;
