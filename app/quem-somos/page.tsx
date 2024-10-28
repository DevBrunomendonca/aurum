import Image from "next/image"
import React from "react"
import CardTeam from "../_components/card-team"

const AboutPage = () => {
  return (
    <>
      <section className="min-h-[700px] bg-[url('/banner-quem-somos-m-1.webp')] bg-cover bg-center bg-no-repeat md:bg-[url('/banner-quem-somos-d-1.webp')]">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-4 py-32 lg:flex-row">
          <div className="flex h-full w-full flex-col items-center justify-center gap-6">
            <h1 className="font-[family-name:var(--font-modani-arabic-bold)] text-4xl text-white">
              A <span className="text-yellow-color"> Aurum Capital </span>{" "}
              nasceu com a ideia de revolucionar como as pessoas{" "}
              <span className="text-yellow-color">
                {" "}
                enxergam o Mercado Financeiro{" "}
              </span>
              .
            </h1>
            <div className="space-y-2">
              <p className="text-sm text-white opacity-50">
                Muitas empresas com promessas de ganhos rápidos e riqueza fácil
                se popularizaram no mercado, principalmente pós-pandemia, e
                muitas pessoas se frustraram, pois investiram o que tinha e não
                obtiveram retorno.{" "}
              </p>
              <p className="text-sm text-white opacity-50">
                Nós viemos para mudar esse paradigma, para mostrar e ensinar que
                é possível sim fazer dinheiro nesse Mercado, porém, que não é
                algo fácil, de rápido retorno, demanda estudo, empenho,
                compreensão que existe risco de percas e como gerir esse risco.
              </p>
              <p className="text-sm text-white opacity-50">
                Somos um conjunto de especialistas que atuaram nas mesas de um
                dos maiores bancos do país, e decidiu abrir mão da estabilidade
                para fundar uma Instituição de Ensino do Mercado Financeiro,
                para trazer mais pessoas para essa profissão, pessoas dedicadas,
                comprometidas com essa profissão.
              </p>
            </div>
          </div>
          <div className="flex w-full justify-center">
            <Image
              src="/imagem-business.webp"
              alt="Imagem Business"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full max-w-[480px] object-cover"
            />
          </div>
        </div>
      </section>
      <section className="min-h-[700px] bg-[url('/banner-quem-somos-m-2.webp')] bg-cover bg-center bg-no-repeat px-4 py-16 md:bg-[url('/banner-quem-somos-d-2.webp')]">
        <div className="mx-auto max-w-6xl space-y-8">
          <h2 className="text-center font-[family-name:var(--font-modani-arabic-bold)] text-3xl text-white">
            Time de <span className="text-yellow-color">especialistas</span>
          </h2>
          <div className="grid w-full grid-cols-1 place-items-center items-center gap-8 md:grid-cols-2 lg:grid-cols-3">
            <CardTeam srcImage="/perfil-3.png" titleCard="Caio Henrique" />
            <CardTeam srcImage="/perfil-4.png" titleCard="Ismael Guimarães" />
            <CardTeam srcImage="/perfil-2.png" titleCard="Thiago Evangelista" />
            <CardTeam srcImage="/perfil-5.png" titleCard="Urbano Paiva" />
            <CardTeam srcImage="/perfil-1.png" titleCard="Wagner Luiz" />
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutPage
