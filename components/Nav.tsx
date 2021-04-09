import Link from 'next/link'
import { Link as Linkscroll } from 'react-scroll'
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
      id: 'home',
      name: 'Homepage',
      link: '/',
    },
    {
      id: 'about',
      name: 'About Us',
      link: '#',
    },
    {
      id: 'services',
      name: 'Services',
      link: '#',
    },
    {
      id: 'contact',
      name: 'Contact',
      link: '#',
    },
    {
      id: 'external',
      name: 'External',
      link: '#',
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
                  <Linkscroll
                    activeClass={navStyles['scroll-active']}
                    to={navitem.id}
                    spy={true}
                    smooth={true}
                    duration={1000}
                  >
                    {navitem.name}
                  </Linkscroll>
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
