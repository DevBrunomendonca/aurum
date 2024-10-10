import { Menu } from "lucide-react"
import Image from "next/image"
import React from "react"
import ListNavHeader from "./list-nav-header"

const Header = () => {
  return (
    <header className="absolute left-0 right-0 top-0 mx-auto flex max-w-6xl items-center justify-between p-4">
      <Image
        src="/logo-aurum.svg"
        alt="Logo Aurum"
        height={28}
        width={145}
        className="cursor-pointer"
      />
      <ListNavHeader />
      <Menu
        className="block cursor-pointer md:hidden"
        color="#F3E902"
        size={32}
      />
    </header>
  )
}

export default Header
