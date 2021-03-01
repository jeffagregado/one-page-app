import Link from 'next/link'
import navStyles from '../styles/Nav.module.scss'

const Nav = () => {
  return (
    <nav className={`${navStyles.nav}`}>
      <ul>
        <li>
          <Link href="/">Hompage</Link>
        </li>
        <li>
          <Link href="/about">About Us</Link>
        </li>
        <li>
          <Link href="/about">Services</Link>
        </li>
        <li>
          <Link href="/about">Contact</Link>
        </li>
        <li>
          <Link href="/about">External</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
