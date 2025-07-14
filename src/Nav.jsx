import React from 'react'
import { Link } from 'react-router-dom'
import {
  IoHomeOutline,
  IoBookOutline,
  IoLibraryOutline,
  IoChatbubblesOutline,
  IoLogInOutline,
} from 'react-icons/io5'

function Nav() {
  return (
    <nav>
      <ul className="flex flex-row gap-6 text-sm font-medium text-[#4A90E2]">
        <li>
          <Link
            to="/"
            className="flex items-center gap-1 px-3 py-2 rounded-full transition-all duration-200 hover:bg-[#1e74d5] hover:text-white"
          >
            <IoHomeOutline size={20} />
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/Cursos"
            className="flex items-center gap-1 px-3 py-2 rounded-full transition-all duration-200 hover:bg-[#1e74d5] hover:text-white"
          >
            <IoBookOutline size={20} />
            Cursos
          </Link>
        </li>
        <li>
          <Link
            to="/Libary"
            className="flex items-center gap-1 px-3 py-2 rounded-full transition-all duration-200 hover:bg-[#1e74d5] hover:text-white"
          >
            <IoLibraryOutline size={20} />
            Biblioteca
          </Link>
        </li>
        <li>
          <Link
            to="/Forum"
            className="flex items-center gap-1 px-3 py-2 rounded-full transition-all duration-200 hover:bg-[#1e74d5] hover:text-white"
          >
            <IoChatbubblesOutline size={20} />
            Fórum
          </Link>
        </li>
        <li>
          <Link
            to="/Signinform"
            className="flex items-center gap-1 px-3 py-2 rounded-full transition-all duration-200 hover:bg-[#1e74d5] hover:text-white"
          >
            <IoLogInOutline size={20} />
            Login
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
