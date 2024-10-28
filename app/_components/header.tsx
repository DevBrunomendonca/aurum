"use client"

import { Menu } from "lucide-react"
import React, { useCallback, useEffect, useState } from "react"
import ListNavHeader from "./list-nav-header"
import Logo from "./logo"
import MenuBurguer from "./menu-burguer"

const Header = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false)

  const openMenu = useCallback(() => {
    setMenuOpen(true)
  }, [])

  const closeMenu = useCallback(() => {
    setMenuOpen(false)
  }, [])

  const handleResize = useCallback(() => {
    if (window.innerWidth > 1024) {
      closeMenu()
    }
  }, [closeMenu])

  useEffect(() => {
    const updateBodyOverflow = () => {
      document.body.style.overflow = menuOpen ? "hidden" : ""
    }
    updateBodyOverflow()
    return () => {
      document.body.style.overflow = ""
    }
  }, [menuOpen])

  useEffect(() => {
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [handleResize])
  return (
    <header className="absolute left-0 right-0 top-0 mx-auto flex max-w-6xl items-center justify-between p-4">
      <Logo />
      <ListNavHeader />
      <Menu
        className="block cursor-pointer md:hidden"
        color="#F3E902"
        size={32}
        onClick={openMenu}
      />
      {menuOpen && <MenuBurguer closeMenu={closeMenu} />}
    </header>
  )
}

export default Header
