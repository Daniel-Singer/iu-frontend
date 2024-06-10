import { Outlet } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import classes from './Layout.module.css';

const ScreenLayout = () => {
  return (
    <div className={classes.screen}>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default ScreenLayout;
