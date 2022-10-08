import { Link } from 'react-router-dom'
import styles from './Nav.module.scss'

function Nav() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li>
          <Link className={styles.li} to={`/`}>
            Home
          </Link>
        </li>
        <li>
          <Link className={styles.li} to={`/favourite`}>
            Favourite
          </Link>
        </li>
        <li>
          <Link className={styles.li} to={`/rated`}>
            Rated
          </Link>
        </li>
      </ul>
    </nav>
  )
}
export default Nav
