import Image from "next/image"
import CardStage from "./_components/card-stage"
import CardCourse from "./_components/card-course"
import CardClients from "./_components/card-clients"

const ProductsPage = () => {
  return (
    <>
      <section className="h-[800px] bg-[url('/banner-main-products-m.webp')] bg-cover bg-right-top bg-no-repeat px-4 md:bg-[url('/banner-main-products-d.webp')]">
        <div className="mx-auto flex h-full max-w-6xl flex-col items-start justify-center gap-4">
          <h1 className="max-w-[820px] text-start text-4xl text-white md:text-7xl">
            Domine os Investimentos em Dólar{" "}
            <Image
              className="inline pr-4"
              src="/icone-money.svg"
              alt=""
              width={60}
              height={60}
            />
            com o <span className="text-yellow-color">Por Além das Ondas</span>
          </h1>
          <p className="max-w-[620px] text-sm text-white opacity-50">
            Este curso foi desenvolvido para proporcionar uma compreensão
            profunda e prática do mercado de dólar futuro, utilizando
            estratégias baseadas em modelos matemáticos e análise quantitativa.
            Ao longo do curso, você aprenderá a configurar sua plataforma,
            gerenciar riscos de forma eficiente e aplicar as melhores práticas
            para operar com confiança. Com foco em precisão e alta
            assertividade, este curso é o último que você precisará para dominar
            o dólar futuro e alcançar consistência em suas operações.
          </p>
        </div>
      </section>
      <section className="px-4 py-8">
        <div className="mx-auto max-w-7xl space-y-8">
          <h2 className="font-[family-name:var(--font-modani-arabic-bold)] text-4xl text-white">
            O que você vai <span className="text-yellow-color">aprender</span>?
          </h2>
          <div className="flex w-full flex-wrap items-end justify-center gap-4">
            <CardStage
              titleCard="Etapa 1º"
              tagsCard={["Estratégias dos Bancos", "Abordagem Institucional"]}
              descriptionCard="Entenda como as grandes instituições financeiras operam no mercado de Dólar Futuro. Nosso curso oferece uma abordagem institucional, ensinando as estratégias dos bancos para identificar e atuar nos pontos cruciais de interesse. Aprenda como alinhar suas operações com as práticas dos grandes players do mercado."
            />
            <CardStage
              titleCard="Etapa 2º"
              tagsCard={[
                "Zonas de Interesse",
                "Fórmulas Avançadas",
                "Gerenciamento de Risco",
                "Alvo Longo",
                "Análise Quantitativa",
              ]}
              descriptionCard="Domine o mercado com uma abordagem baseada em Análise Quantitativa e Fórmulas Avançadas. Nosso curso ensina como identificar Zonas de Interesse institucionais e aplicar um Gerenciamento de Risco eficiente, garantindo operações seguras e estrategicamente posicionadas para o sucesso."
            />
            <CardStage
              titleCard="Etapa 3º"
              tagsCard={[
                "Performance Consistente",
                "Alvo Longo",
                "Indicador Exclusivo",
                "Análise Pré-Mercado",
                "Stop Curto",
              ]}
              descriptionCard="Maximize seus resultados com nosso Stop Curto e Alvo Longo, garantindo uma Performance Consistente a longo prazo. Além disso, conte com nosso Indicador Exclusivo que faz a Análise Pré-Mercado diariamente, permitindo que você esteja sempre à frente"
              isEspecial={true}
            />
          </div>
        </div>
      </section>
      <section className="min-h-[600px] bg-[url('/banner-course-products-m.webp')] bg-cover bg-center bg-no-repeat px-4 py-32 md:bg-[url('/banner-course-products-d.webp')]">
        <div className="mx-auto flex max-w-6xl flex-col gap-8">
          <div className="max-w-[495px]">
            <h2 className="font-[family-name:var(--font-modani-arabic-bold)] text-4xl text-white">
              Como funciona o <span className="text-yellow-color">curso</span>?
            </h2>
            <p className="text-sm text-white opacity-50">
              Lorem ipsum dolor sit amet consectetur. Id ut venenatis elementum
              tincidunt turpis cras. Elementum eu condimentum.
            </p>
          </div>
          <div className="flex justify-between gap-3 overflow-x-scroll lg:overflow-auto [&::-webkit-scrollbar]:hidden">
            <CardCourse
              hrefCard="/"
              srcImage="/banner-course-1.png"
              altImage="Banner curso comece aqui"
            />
            <CardCourse
              hrefCard="/"
              srcImage="/banner-course-2.png"
              altImage="Banner curso a análise quantitativa"
            />
            <CardCourse
              hrefCard="/"
              srcImage="/banner-course-3.png"
              altImage="Banner curso estrutura operacional"
            />
            <CardCourse
              hrefCard="/"
              srcImage="/banner-course-4.png"
              altImage="Banner curso finalizaçã"
            />
            <CardCourse
              hrefCard="/"
              srcImage="/banner-course-5.png"
              altImage="Banner curso material complementar"
            />
          </div>
        </div>
      </section>
      <section className="px-4 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-8 lg:flex-row">
          <div className="max-w-[550px] space-y-6">
            <div>
              <h2 className="font-[family-name:var(--font-modani-arabic-bold)] text-4xl text-white">
                Para quem é esse curso?
              </h2>
              <p className="text-sm text-white opacity-50">
                Lorem ipsum dolor sit amet consectetur. Convallis tellus mauris
                enim interdum mauris luctus suscipit amet mauris. Mollis quisque
                mauris sit ultrices blandit.
              </p>
            </div>
            <div className="flex max-w-[423px] flex-wrap gap-3">
              <p className="rounded-3xl border-[1px] border-white px-5 py-2 text-sm text-white opacity-50">
                Lorem ipsum dolor sit amet
              </p>
              <p className="rounded-3xl border-[1px] border-white px-5 py-2 text-sm text-white opacity-50">
                Lorem ipsum
              </p>
              <p className="rounded-3xl border-[1px] border-white px-5 py-2 text-sm text-white opacity-50">
                Lorem ipsum
              </p>
              <p className="rounded-3xl border-[1px] border-white px-5 py-2 text-sm text-white opacity-50">
                Lorem ipsum dolor sit amet
              </p>
              <p className="rounded-3xl border-[1px] border-white px-5 py-2 text-sm text-white opacity-50">
                Lorem ipsum dolor sit amet
              </p>
              <p className="rounded-3xl border-[1px] border-white px-5 py-2 text-sm text-white opacity-50">
                Lorem ipsum
              </p>
              <p className="rounded-3xl border-[1px] border-white px-5 py-2 text-sm text-white opacity-50">
                Lorem ipsum
              </p>
              <p className="rounded-3xl border-[1px] border-white px-5 py-2 text-sm text-white opacity-50">
                Lorem ipsum dolor sit amet
              </p>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/banner-right-course.webp"
              alt="Banner mulher mechendo em um compotador"
              height={488}
              width={488}
            />
            <div
              className="spcae-y-2 absolute bottom-0 left-0 max-w-[310px] rounded-lg p-6 lg:-left-28"
              style={{
                boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                background: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
              }}
            >
              <h4 className="font-[family-name:var(--font-modani-arabic-bold)] text-base text-yellow-color">
                | Lorem ipsum dolor{" "}
              </h4>
              <p className="text-[#969696]">
                Lorem ipsum dolor sit amet consectetur. Malesuada sit sem odio
                aliquet placerat varius duis urna et. Tincidunt blandit.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="px-4 py-8">
        <div className="mx-auto w-full max-w-7xl space-y-8">
          <div className="max-w-[495px] space-y-2">
            <h2 className="font-[family-name:var(--font-modani-arabic-bold)] text-4xl text-white">
              Clientes <span className="text-yellow-color">Satisfeitos</span>
            </h2>
            <p className="text-sm text-[#969696]">
              Lorem ipsum dolor sit amet consectetur. Neque tortor ac nam
              sapien. Tortor dolor penatibus nunc at dui risus. Leo.
            </p>
          </div>
          <div className="flex w-full justify-start gap-6 overflow-x-scroll lg:overflow-auto [&::-webkit-scrollbar]:hidden">
            <CardClients />
            <CardClients />
            <CardClients />
            <CardClients />
          </div>
        </div>
      </section>
      <section className="px-4 py-16">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-around gap-6 rounded-2xl bg-yellow-color p-8 md:flex-row">
          <h3 className="max-w-[240px] font-[family-name:var(--font-modani-arabic-bold)] text-4xl text-black">
            Garanta sua Vaga!
          </h3>
          <p className="max-w-[240px] text-sm text-black">
            Se você quer levar seus investimentos a um novo patamar e garantir a
            proteção do seu patrimônio, inscreva-se no curso
          </p>
          <Image
            src="/arrow-cool-down.svg"
            alt="icone seta para cima"
            width={254}
            height={203}
          />
        </div>
      </section>
    </>
  )
}

export default ProductsPage
