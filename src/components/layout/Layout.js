import classes from './Layout.module.css';
import NavBar from './NavBar.js';

function Layout(props) {
  return (
    <div>
      <NavBar />
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

export default Layout;