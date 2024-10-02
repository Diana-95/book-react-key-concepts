import SideDrawer from './SideDrawer';
import classes from './MainNavigation.module.css';
import { useState } from 'react'
function MainNavigation() {

  const [isSideOpen, setIsSideOpen] = useState(false);

  function sideDrawerCloseHandler () {
    setIsSideOpen(false);
  }

  function sideDrawerOpenHandler () {
    setIsSideOpen(true);
  }

  return (
    <>
    <header className={classes.header}>
      <h1>Demo App</h1>
      <button onClick={sideDrawerOpenHandler} className={classes.btn}>
        <div />
        <div />
        <div />
      </button>
    </header>
    {
      isSideOpen? <SideDrawer backdropCLick={sideDrawerCloseHandler}/> : null
    /* Should be shown conditionally: <SideDrawer />  */
    }
    </>
  );
}

export default MainNavigation;
