import Link from 'next/link'
import styles from './Navbar.module.css'

function Navbar() {
  return (
    <nav className={styles.nav}>
      <Link href='/'><li>Home</li></Link>
      <Link href='/profile/123'><li>Profile</li></Link>
      <Link href='/job'><li>Job</li></Link>
    </nav>
  )
}

export default Navbar
