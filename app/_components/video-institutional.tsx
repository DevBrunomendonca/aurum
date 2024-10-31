import Image from "next/image"
import React from "react"

const VideoInstitutional = () => {
  return (
    <section>
      <div className="bg-yellow-color px-4 py-0">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 md:flex-row">
          <div className="flex w-full flex-col items-start gap-6">
            <h2 className="text-start font-[family-name:var(--font-modani-arabic-bold)] text-4xl text-black">
              Dê o Próximo Passo Rumo ao Sucesso
            </h2>
            <p className="text-start text-sm text-black">
              Saiba como a Aurum pode te ajudar a trilhar seu caminho no Mercado
              Financeiro da forma correta.
            </p>
            <a
              className="flex w-full max-w-[380px] items-center justify-center gap-4 rounded-md bg-black px-8 py-3 text-center text-yellow-color transition-all delay-75 hover:bg-[#282727]"
              href="https://wa.me/556235832540"
              target="_blank"
            >
              <Image
                width={16}
                height={16}
                src="/icone-wtpp-y.svg"
                alt="Icone WhatsApp"
              />
              <button>Saiba mais</button>
            </a>
          </div>
          <div className="w-full">
            <Image
              src="/imagem-alvo.webp"
              alt="Imagem de um alvo"
              width={660}
              height={0}
              className="h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default VideoInstitutional
