import { ArrowRight, Play } from "lucide-react"
import Image from "next/image"
import React from "react"

const VideoInstitutional = () => {
  return (
    <section>
      <div className="flex min-h-[600px] items-center justify-center bg-[url('/banner-video.png')] bg-cover bg-center bg-no-repeat">
        <div className="rounded-full bg-white p-4">
          <Play color="#F3E902" size={40} />
        </div>
      </div>
      <div className="bg-yellow-color px-4 py-16">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 md:flex-row">
          <div className="flex w-full flex-col items-start gap-6">
            <h2 className="text-start font-[family-name:var(--font-modani-arabic-bold)] text-4xl text-black">
              Dê o Próximo Passo Rumo ao Sucesso
            </h2>
            <p className="text-start text-sm text-black">
              Inscreva-se para nossa turma presencial de pessoas que decidiram
              se profissionalizar no mercado.
            </p>
            <div className="flex w-full max-w-[480px] flex-col items-center justify-between gap-4 md:flex-row">
              <a
                className="mx-auto w-full max-w-[380px] rounded-md bg-black px-8 py-3 text-center text-yellow-color transition-all delay-75 hover:bg-[#282727]"
                href=""
              >
                <button>Faça parte dos 5%</button>
              </a>
              <a className="group/edit w-full text-black" href="">
                <button className="flex w-full items-center justify-center gap-1 text-center">
                  Saiba mais{" "}
                  <ArrowRight
                    className="transition-all delay-75 group-hover/edit:translate-x-1"
                    color="#000"
                  />
                </button>
              </a>
            </div>
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
