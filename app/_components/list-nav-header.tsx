import Link from "next/link"
import React from "react"

const ListNavHeader = () => {
  return (
    <nav className="hidden items-center justify-center gap-6 md:flex">
      <ul className="flex items-center gap-4">
        <Link
          className="text-sm text-white transition-all delay-75 hover:text-yellow-color"
          href="/"
        >
          <li>Home</li>
        </Link>
        <Link
          className="text-sm text-white transition-all delay-75 hover:text-yellow-color"
          href="/quem-somos"
        >
          <li>Quem Somos</li>
        </Link>
        <Link
          className="text-sm text-white transition-all delay-75 hover:text-yellow-color"
          href="/servicos"
        >
          <li>Serviços</li>
        </Link>
        <Link
          className="text-sm text-white transition-all delay-75 hover:text-yellow-color"
          href="/contato"
        >
          <li>Contato</li>
        </Link>
        <Link
          className="text-sm text-white transition-all delay-75 hover:text-yellow-color"
          href="/workshop"
        >
          <li>Workshop</li>
        </Link>
      </ul>
      <a
        href="https://wa.me/556235832540"
        target="_blank"
        className="rounded-md bg-yellow-color px-8 py-2 transition-all delay-75 hover:bg-[#D3CB18]"
      >
        <button className="text-sm text-black">Fale conosco</button>
      </a>
    </nav>
  )
}

export default ListNavHeader
