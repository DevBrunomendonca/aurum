import Link from "next/link"
import Logo from "./logo"
import { X } from "lucide-react"
import Image from "next/image"

interface MenuBurguerProps {
  closeMenu: () => void
}

const MenuBurguer = ({ closeMenu }: MenuBurguerProps) => {
  return (
    <div className="absolute right-0 top-0 z-50 flex h-screen w-full animate-[showMenuBurguer_.8s_ease-in-out] flex-col items-center justify-start">
      <div className="flex h-full w-full flex-col gap-8 bg-black px-2 py-4">
        <div className="flex items-center justify-between">
          <Logo />
          <X
            className="cursor-pointer"
            size={34}
            onClick={closeMenu}
            color="#F3E902"
          />
        </div>
        <nav className="flex flex-col items-center justify-center gap-8 pt-8">
          <ul className="flex flex-col items-center gap-4">
            <Link onClick={closeMenu} className="text-base text-white" href="/">
              <li>Início</li>
            </Link>
            <Link
              onClick={closeMenu}
              className="text-base text-white"
              href="/quem-somos"
            >
              <li>Quem Somos</li>
            </Link>
            <Link
              onClick={closeMenu}
              className="text-base text-white"
              href="/servicos"
            >
              <li>Educacional</li>
            </Link>
            <Link
              onClick={closeMenu}
              className="text-base text-white"
              href="/contato"
            >
              <li>Contato</li>
            </Link>
            <Link
              onClick={closeMenu}
              className="text-base text-white"
              href="/workshop"
            >
              <li>Workshop</li>
            </Link>
          </ul>
          <div className="flex w-full max-w-[380px] flex-col gap-3 pt-3">
          
            <a
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-yellow-color p-4"
              href="#"
              onClick={closeMenu}
            >
              <Image
                src="/icone-wtpp.svg"
                alt="icone instagram"
                width={22}
                height={22}
              />
              <button className="text-center text-base font-medium text-black">
                Instagram
              </button>
            </a>
           
          </div>
        </nav>
      </div>
    </div>
  )
}

export default MenuBurguer
