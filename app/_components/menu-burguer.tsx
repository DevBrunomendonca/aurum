import Logo from "./logo"
import { X } from "lucide-react"

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
          <ul className="flex flex-col items-center gap-8">
            <a onClick={closeMenu} href="#home">
              <li className="text-base text-white transition delay-150 hover:text-[#F3E902]">
                Início
              </li>
            </a>
            <a onClick={closeMenu} href="#about">
              <li className="text-base text-white transition delay-150 hover:text-[#F3E902]">
                Sobre o whorkshop
              </li>
            </a>
            <a onClick={closeMenu} href="#speaker">
              <li className="text-base text-white transition delay-150 hover:text-[#F3E902]">
                Palestrantes
              </li>
            </a>
            <a onClick={closeMenu} href="#location">
              <li className="text-base text-white transition delay-150 hover:text-[#F3E902]">
                Localização
              </li>
            </a>
          </ul>
          <a
            onClick={closeMenu}
            href="https://checkout.doppus.app/28256588/"
            target="_blank"
            className="mx-auto w-full max-w-[480px] rounded-md bg-[#F3E902] px-8 py-2 text-center text-base text-black"
          >
            Quero participar
          </a>
        </nav>
      </div>
    </div>
  )
}

export default MenuBurguer
