import Link from 'next/link'
import { useState } from 'react'
import navStyles from '../styles/Nav.module.scss'
import NavBurger from './NavBurger'

const Nav = () => {
  const scrollTo = (ele: any) => {
    ele.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  const [isNavCollapsed, setNavCollapsed] = useState(false)
  const handleNavCollapsed = () => setNavCollapsed(!isNavCollapsed)

  const navItems = [
    {
      id: 0,
      name: 'Homepage',
      link: '/',
    },
    {
      id: 1,
      name: 'About Us',
      link: '/about',
    },
    {
      id: 2,
      name: 'Services',
      link: '/services',
    },
    {
      id: 3,
      name: 'Contact',
      link: '/contact',
    },
    {
      id: 4,
      name: 'External',
      link: '/external',
    },
  ]

  return (
    <>
      <nav className={`${navStyles.nav} ${navStyles['nav-fixed-top']}`}>
        <NavBurger onClick={handleNavCollapsed}></NavBurger>
        <div
          className={`${navStyles['nav-list']} ${
            isNavCollapsed ? navStyles['collapse-active'] : navStyles.collapse
          }`}
        >
          <ul>
            {navItems.map((navitem) => (
              <li key={navitem.id}>
                <Link href={navitem.link}>
                  <a>{navitem.name}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Nav
