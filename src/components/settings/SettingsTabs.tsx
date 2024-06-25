import { Paper, ScrollArea, Tabs } from '@mantine/core';

interface ITabListItem {
  label: string;
  value: string;
}

const tabsListItems: ITabListItem[] = [
  {
    label: 'Kategorien',
    value: 'categories',
  },
];

const SettingsTabs = () => {
  return (
    <ScrollArea.Autosize>
      <Paper flex={1}>
        <Tabs defaultValue="categories">
          <Tabs.List>
            {tabsListItems.map(({ label, value }) => (
              <Tabs.Tab key={`${label}${value}`} value={value}>
                {label}
              </Tabs.Tab>
            ))}
          </Tabs.List>
        </Tabs>
      </Paper>
    </ScrollArea.Autosize>
  );
};

export default SettingsTabs;
