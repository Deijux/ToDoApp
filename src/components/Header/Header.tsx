'use client'

import { useContext, useState } from 'react'
import { AuthContext } from '@/context/auth.context'
import { CgProfile } from "react-icons/cg";

export default function Header() {
  const { user, handleLogout } = useContext(AuthContext)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
    console.log(user)
  }

  const onLogout = async () => {
    await handleLogout()
    setIsDropdownOpen(false)
  }

  return (
    <header className='my-2 bg-marshland-800 py-2 px-4 relative z-10 rounded h-fit flex justify-between items-center'>
      <h1 className='text-2xl font-bold text-marshland-100'>Task Manager</h1>
      <nav>
        {user && (
          <div className="relative flex items-center">
            <button
              onClick={toggleDropdown}
              className="text-marshland-100 hover:text-marshland-200 focus:outline-none "
            >
              <CgProfile size={34}  />
            </button>
            <div className={`absolute mt-4 right-0 w-48 bg-marshland-800 rounded-md shadow-lg z-20 transition-all duration-200 ease-out ${isDropdownOpen ? 'opacity-100 translate-y-16' : 'opacity-0 translate-y-8 pointer-events-none'}`}>
              <div className="py-1">
                <p className="px-4 py-2 text-sm text-marshland-100">Sesión: {user.firstName}</p>
                <button
                  onClick={onLogout}
                  className="block px-4 py-2 text-sm text-marshland-100 hover:bg-marshland-600 w-full text-left"
                >
                  Cerrar sesión
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
