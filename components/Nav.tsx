import Link from 'next/link'
import { useState } from 'react'
import navStyles from '../styles/Nav.module.scss'

const Nav = () => {
  const scrollTo = (ele: any) => {
    ele.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  const [isNavCollapsed, setNavCollapsed] = useState(false)
  const handleNavCollapsed = () => setNavCollapsed(!isNavCollapsed)

  return (
    <>
      <nav className={`${navStyles.nav} ${navStyles['nav-fixed-top']}`}>
        <button
          type="button"
          className={navStyles['nav-toggle']}
          onClick={handleNavCollapsed}
        >
          <span className={navStyles['nav-icon']}></span>
          <span className={navStyles['nav-icon']}></span>
          <span className={navStyles['nav-icon']}></span>
        </button>
        <div
          className={`${navStyles['nav-list']} ${
            isNavCollapsed ? navStyles['collapse-active'] : navStyles.collapse
          }`}
        >
          <ul>
            <li>
              <Link href="/">
                <a>Hompage</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a>About Us</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a>Services</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a>Contact</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a>External</a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Nav
