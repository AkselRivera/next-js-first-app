'use client'
import Link from 'next/link'

import { usePathname } from 'next/navigation'

import style from './active-link.module.css'

interface Props {
  label: string
  href: string
  icon?: JSX.Element
}

export function ActiveLink(props: Props) {
  const pathName = usePathname()
  return (
    <Link
      href={props.href}
      className={`${style.link} ${
        pathName === props.href && style['active-link']
      }`}
    >
      <span className="flex items-center gap-1 mx-2">
        {props.icon}
        <span>{props.label}</span>
      </span>
    </Link>
  )
}
