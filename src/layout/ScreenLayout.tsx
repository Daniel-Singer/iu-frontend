import { Outlet } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import classes from './Layout.module.css';

const ScreenLayout = () => {
  return (
    <div className={classes.screen}>
      <Navbar />
      <div className={classes.main}>
        <Outlet />
      </div>
    </div>
  );
};

export default ScreenLayout;
