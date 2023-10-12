import Link from 'next/link'
import styles from './navbar.module.css'
import { ActiveLink } from './ActiveLink'

const menuItems = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'About',
    href: '/about',
  },
  {
    title: 'Contact',
    href: '/contact',
  },
  {
    title: 'Pricing',
    href: '/pricing',
  },
]

export const Navbar = () => {
  return (
    <nav className={styles['menu-container']}>
      {menuItems.map((link) => (
        <ActiveLink key={link.href} title={link.title} href={link.href} />
      ))}
    </nav>
  )
}
