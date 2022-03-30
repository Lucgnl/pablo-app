import { Link } from 'react-router-dom';
import classes from './NavBar.module.css';

function NavBar() {  
    return (
        <header className={classes.header}>
            <div className={classes.logo}>Weakly Interview</div>
            <nav>
                <ul>
                    <li>
                        <Link to='/all'>All of Pablo</Link>
                    </li>
                    <li>
                        <Link to='/all-sus'>Sus Pablo</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar;