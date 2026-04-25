"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NavLink = ({ href, children }) => {
  const pathName = usePathname()
  const isActive = href === pathName

  return (
    <Link href={href} className={`${isActive ? "border-b-2 border-pink-800" : ""}`}>
      {children}
    </Link>
  )
}

export default NavLink
