import { Link } from 'react-router-dom';
import classes from './Welcome.module.css';

function Welcome() {
  return (
    <div className={classes.header}>
      <h1>Welcome to Pablo's Weakly Interview</h1>
      <h2>Enjoy ur stay!</h2>
      <Link to='/all'>Go to All of Pablo</Link>
    </div>
  );
}

export default Welcome;
