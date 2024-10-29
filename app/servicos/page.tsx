import Image from "next/image"
import CardStage from "./_components/card-stage"
//import CardCourse from "./_components/card-course"
import CardClients from "./_components/card-clients"

const ProductsPage = () => {
  return (
    <>
      <section className="h-[600px] bg-[url('/banner-main-products-m.webp')] bg-cover bg-right-top bg-no-repeat px-4 md:bg-[url('/banner-main-products-d.webp')]">
        <div className="mx-auto flex h-full max-w-6xl flex-col items-start justify-center gap-4">
          <h1 className="max-w-[1080px] text-start text-6xl text-white md:text-10x1">
            Domine o Mercado Financeiro{" "}
            com o método da {" "}
            <span className="text-yellow-color">Aurum Capital</span>
          </h1>
          <p className="max-w-[1080px] text-lg text-white opacity-75 mt-4">
            Esta Academia foi desenvolvida para proporcionar uma compreensão
            profunda e prática dos mercados financeiros, utilizando estratégias
            baseadas em análise quantitativa e cálculos matemáticos. Na nossa
            comunidade, você não apenas terá acesso a esse conhecimento, mas
            também poderá explorar uma ampla gama de cursos que abrangem
            diversos segmentos do mercado financeiro, todos acessíveis com uma
            única mensalidade. Com foco em precisão e alta assertividade, nossa
            proposta é oferecer um ambiente de aprendizado colaborativo, onde
            você terá todas as ferramentas necessárias para dominar nosso método
            e alcançar consistência em suas operações. Junte-se a nós e descubra
            tudo o que precisa para se destacar no mercado.
          </p>
        </div>
      </section>
      <section className="px-4 py-">
        <div className="mx-auto max-w-7xl space-y-4">
          <h2 className="font-[family-name:var(--font-modani-arabic-bold)] text-5xl text-white">
            O que você vai <span className="text-yellow-color">aprender</span>?
          </h2>
          <div className="flex w-full flex-wrap items-end justify-center gap-4">
            <CardStage
              titleCard="Etapa 1º"
              tagsCard={["Análise Quantitativa", "Abordagem Institucional"]}
              descriptionCard="Entenda como as grandes instituições financeiras operam no Mercado Financeiro. Nosso curso oferece uma abordagem institucional, ensinando as estratégias dos bancos para identificar e atuar nos pontos cruciais de interesse. Aprenda como alinhar suas operações com as práticas dos grandes players do mercado."
            />
            <CardStage
              titleCard="Etapa 2º"
              tagsCard={[
                "Zonas de Interesse",
                "Fórmulas Avançadas",
                "Gerenciamento de Risco",
                "Montagem de Posição",
                "Indicador Exclusivo",
              ]}
              descriptionCard="Domine o mercado com uma abordagem baseada em Análise Quantitativa e Fórmulas Avançadas. Nosso curso ensina como identificar Zonas de Interesse institucionais e aplicar um Gerenciamento de Risco eficiente, garantindo operações seguras e estrategicamente posicionadas para o sucesso."
            />
            <CardStage
              titleCard="Etapa 3º"
              tagsCard={[
                "Performance Consistente",
                "Alvo Longo",
                "Investimento Previdenciário",
                "Análise Pré-Mercado",
                "Stop Curto",
              ]}
              descriptionCard="Maximize seus resultados com nosso Stop Curto e Alvo Longo, garantindo uma Performance Consistente a longo prazo. Além disso, conte com nosso Indicador Exclusivo que faz a Análise Pré-Mercado diariamente, permitindo que você esteja sempre à frente"
              isEspecial={true}
            />
          </div>
        </div>
      </section>
      <section className="px-4 py-16">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-8 pb-8 lg:flex-row">
          <div className="max-w-[550px] space-y-6">
            <div>
              <h2 className="font-[family-name:var(--font-modani-arabic-bold)] text-4xl text-white">
                Para quem é esse curso?
              </h2>
              <p className="text-sm text-white opacity-50 mt-4">
                Esta Academia é voltada para todos que desejam aprender e se
                desenvolver no mercado financeiro. Desde iniciantes que buscam
                uma introdução sólida aos conceitos fundamentais, até traders
                experientes que querem diversificar seus conhecimentos e
                estratégias. Junte-se a nós e faça parte de uma rede de
                aprendizado e suporte que visa ajudar cada membro a alcançar
                seus objetivos financeiros.
              </p>
            </div>
            <div className="flex max-w-[423px] flex-wrap gap-3">
              <p className="rounded-3xl border-[1px] border-white px-5 py-2 text-sm text-white opacity-50">
                Educação Financeira
              </p>
              <p className="rounded-3xl border-[1px] border-white px-5 py-2 text-sm text-white opacity-50">
                Análise Quantitativa
              </p>
              <p className="rounded-3xl border-[1px] border-white px-5 py-2 text-sm text-white opacity-50">
                Gestão de Riscos
              </p>
              <p className="rounded-3xl border-[1px] border-white px-5 py-2 text-sm text-white opacity-50">
                Trading
              </p>
              <p className="rounded-3xl border-[1px] border-white px-5 py-2 text-sm text-white opacity-50">
                Diversificação de Investimentos
              </p>
              <p className="rounded-3xl border-[1px] border-white px-5 py-2 text-sm text-white opacity-50">
                Desenvolvimento Pessoal
              </p>
              <p className="rounded-3xl border-[1px] border-white px-5 py-2 text-sm text-white opacity-50">
                Consistência
              </p>
              <p className="rounded-3xl border-[1px] border-white px-5 py-2 text-sm text-white opacity-50">
                Crescimento Patrimonial
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
              className="spcae-y-2 absolute -bottom-12 left-0 max-w-[360px] rounded-lg p-6 lg:-left-28"
              style={{
                boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                background: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
              }}
            >
              <h4 className="font-[family-name:var(--font-modani-arabic-bold)] text-base text-yellow-color">
                | Seja Protagonista do Seu Futuro{" "}
              </h4>
              <p className="text-[#969696]">
                Acreditamos que o conhecimento é a chave para o sucesso
                financeiro. Ao se juntar à nossa Academia, você terá acesso a
                ferramentas e cursos que capacitarão você a tomar decisões
                informadas e a construir uma trajetória sólida no mercado
                financeiro.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="px-4 py-8">
        <div className="mx-auto w-full max-w-7xl space-y-8">
          <div className="max-w-[495px] space-y-2">
            <h2 className="font-[family-name:var(--font-modani-arabic-bold)] text-4xl text-white">
              Alunos <span className="text-yellow-color">Satisfeitos</span>
            </h2>
            <p className="text-sm text-[#969696]">
              Confira o que nossos alunos têm a dizer sobre a Aurum Capital.
            </p>
          </div>
          <div className="flex w-full justify-start gap-6 overflow-x-scroll lg:overflow-auto [&::-webkit-scrollbar]:hidden">
            <CardClients
              name="Ian Javier"
              coment="Gostei muito do objetivo da empresa, confio nela e no Caio, mas principalmente vejo verdade na operação de vocês. Representaram um achado raro pra mim."
            />
            <CardClients
              name="Fernanda Araújo"
              coment="A Aurum Capital é um diferencial muito grande no Mercado, o acompanhamento feito com os alunos eu nunca vi em nenhum outro lugar. O nosso mentor passa tudo com clareza e nos proporciona o melhor estudo do mercado."
            />
            <CardClients
              name="Isac"
              coment="O estudo foi ótimo e aprendi muita coisa boa pra começar a lucrar no mercado financeiro."
            />
            <CardClients
              name="Kleiton Xavier"
              coment="Minha visão mudou totalmente depois da Aurum Capital, o estudo e a forma que nos ensinam é totalmente única no mercado até hoje, indico muito!"
            />
          </div>
        </div>
      </section>
      <section className="px-4 py-16">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-around gap-6 rounded-2xl bg-yellow-color p-8 md:flex-row">
          <h3 className="max-w-[240px] font-[family-name:var(--font-modani-arabic-bold)] text-4xl text-black">
            Transforme Sua Vida!
          </h3>
          <p className="max-w-[240px] text-sm text-black">
            Se você quer levar seus investimentos a um novo patamar e garantir a
            proteção do seu patrimônio, inscreva-se no curso
          </p>
          <a href="https://aurum.themembers.com.br/showcase" target="_blank" rel="noopener noreferrer">
  <Image
    src="/arrow-cool-down.svg"
    alt="icone seta para cima"
    width={254}
    height={203}
  />
</a>
        </div>
      </section>
    </>
  )
}

export default ProductsPage
