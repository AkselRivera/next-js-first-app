import Link from 'next/link'
import { HomeIcon } from '@primer/octicons-react'
import { ActiveLink } from '@/components'

const navItems = [
  {
    label: 'Contact',
    href: '/contact',
    icon: <HomeIcon />,
  },
  {
    label: 'About',
    href: '/about',
    icon: <HomeIcon />,
  },
  {
    label: 'Pricing',
    href: '/pricing',
    icon: <HomeIcon />,
  },
]

export function Navbar() {
  return (
    <nav className="flex bg-zinc-800 bg-opacity-30 p-2 rounded">
      <Link href={'/'} className="flex items-center gap-2">
        <HomeIcon size={16} />
        <span>Home</span>
      </Link>

      <div className="flex flex-1"></div>
      {navItems.map((item, i) => (
        <ActiveLink key={i} {...item} />
      ))}
    </nav>
  )
}
