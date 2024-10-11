import Image from "next/image"
import React from "react"
import CardTeam from "../_components/card-team"
import { Play } from "lucide-react"

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
            <CardTeam
              srcImage="/perfil-1.png"
              titleCard="Adriano Camargo"
              descriptionCard="Et voluptatum molestiae et omnis veniam qui necessitatibus sapiente et eveniet odit ab quae vitae? Quo nemo dignissimos ut reiciendis iure et enim veritatis vel mollitia quae ex eveniet dicta in voluptates odit!"
            />
            <CardTeam
              srcImage="/perfil-4.png"
              titleCard="Caio Henrique"
              descriptionCard="Et voluptatum molestiae et omnis veniam qui necessitatibus sapiente et eveniet odit ab quae vitae? Quo nemo dignissimos ut reiciendis iure et enim veritatis vel mollitia quae ex eveniet dicta in voluptates odit!"
            />
            <CardTeam
              srcImage="/perfil-5.png"
              titleCard="Ismael Guimarães"
              descriptionCard="Et voluptatum molestiae et omnis veniam qui necessitatibus sapiente et eveniet odit ab quae vitae? Quo nemo dignissimos ut reiciendis iure et enim veritatis vel mollitia quae ex eveniet dicta in voluptates odit!"
            />
            <CardTeam
              srcImage="/perfil-3.png"
              titleCard="Thiago Evangelista"
              descriptionCard="Et voluptatum molestiae et omnis veniam qui necessitatibus sapiente et eveniet odit ab quae vitae? Quo nemo dignissimos ut reiciendis iure et enim veritatis vel mollitia quae ex eveniet dicta in voluptates odit!"
            />
            <CardTeam
              srcImage="/perfil-6.png"
              titleCard="Urbano Paiva"
              descriptionCard="Et voluptatum molestiae et omnis veniam qui necessitatibus sapiente et eveniet odit ab quae vitae? Quo nemo dignissimos ut reiciendis iure et enim veritatis vel mollitia quae ex eveniet dicta in voluptates odit!"
            />
            <CardTeam
              srcImage="/perfil-2.png"
              titleCard="Wagner Luiz"
              descriptionCard="Et voluptatum molestiae et omnis veniam qui necessitatibus sapiente et eveniet odit ab quae vitae? Quo nemo dignissimos ut reiciendis iure et enim veritatis vel mollitia quae ex eveniet dicta in voluptates odit!"
            />
          </div>
        </div>
      </section>
      <section>
        <div className="flex min-h-[600px] items-center justify-center bg-[url('/banner-video.png')] bg-cover bg-center bg-no-repeat">
          <div className="rounded-full bg-white p-4">
            <Play color="#F3E902" size={40} />
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutPage
