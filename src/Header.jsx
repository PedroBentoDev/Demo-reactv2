import React from 'react'
import Logo from './Logo'
import Nav from './Nav'

function Header() {
  return (
      <header className="flex items-center justify-between px-6 py-4 shadow-md bg-[#2d2e2e]">
      <Logo />
      <Nav />
    </header>
  )
}

export default Header