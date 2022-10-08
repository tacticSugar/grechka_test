import { Link } from 'react-router-dom'
import styles from './Nav.module.scss'

function Nav() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li className={styles.li}>
          <Link to={`/`}>Home</Link>
        </li>
        <li className={styles.li}>
          <Link to={`/favourite`}>Favourite</Link>
        </li>
        <li className={styles.li}>
          <Link to={`/rated`}>Rated</Link>
        </li>
      </ul>
    </nav>
  )
}
export default Nav
