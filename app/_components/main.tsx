import { ArrowRight, ArrowUp } from "lucide-react"
import React from "react"
import VideoBanner from "./banner-video"

const Main = () => {
  return (
    <section className='h-[800px] bg-[url("/banner-main-m.webp")] bg-cover bg-center bg-no-repeat py-16 md:bg-none'>
      <VideoBanner />
      <div className="mx-auto mt-16 flex h-full max-w-6xl flex-col items-center justify-center gap-6 px-4 md:mt-8 md:items-start">
        <h4 className="flex items-center text-center text-sm text-white md:text-start">
          Transparência, credibilidade e Aurum. <ArrowUp color="#F3E902" />
        </h4>
        <h1 className="max-w-[480px] text-center font-[family-name:var(--font-modani-arabic-bold)] text-4xl text-white md:text-start">
          Transforme<span className="text-yellow-color"> sua vida com </span>o
          Mercado Financeiro
        </h1>
        <p className="max-w-[480px] text-center text-sm text-white md:text-start">
          Entenda o pensamento institucional e quais motivadores os big players
          utilizam para atuar no Mercado, aprenda a gerenciar o risco e torne-se
          parte dos 5% que sobrevive ao processo.
        </p>
        <div className="flex w-full max-w-[480px] flex-col items-center justify-between gap-4 md:flex-row">
          <a
            className="mx-auto w-full max-w-[380px] rounded-md bg-yellow-color px-8 py-2 text-center text-black transition-all delay-75 hover:bg-[#D3CB18]"
            href="https://wa.me/556235832540"
            target="_blank"
          >
            <button>Faça parte dos 5%</button>
          </a>
          <a
            className="group/edit w-full text-yellow-color"
            href="https://wa.me/556235832540"
            target="_blank"
          >
            <button className="flex w-full items-center justify-center gap-1 text-center">
              Saiba mais{" "}
              <ArrowRight
                className="transition-all delay-75 group-hover/edit:translate-x-1"
                color="#F3E902"
              />
            </button>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Main
