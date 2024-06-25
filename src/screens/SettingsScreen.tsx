import ScreenHeader from '../components/screen/ScreenHeader';
import SettingsTabs from '../components/settings/SettingsTabs';

const SettingsScreen = () => {
  return (
    <>
      <ScreenHeader label="Einstellungen"></ScreenHeader>
      <SettingsTabs />
    </>
  );
};

export default SettingsScreen;
