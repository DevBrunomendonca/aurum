import Image from "next/image"

const ContactPage = () => {
  return (
    <>
      <section className="flex h-full min-h-[1100px] items-center justify-center bg-[url('/banner-contact-m.webp')] bg-cover bg-center bg-no-repeat px-4 py-8 md:min-h-[700px] md:bg-[url('/banner-contact-d.webp')]">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row">
          <div className="w-full space-y-5">
            <div>
              <h1 className="font-[family-name:var(--font-modani-arabic-bold)] text-4xl text-white">
                Fale <span className="text-yellow-color">conosco</span>
              </h1>
              <p className="text-sm text-white opacity-50">
                Entre em contato através dos nossos canais de atendimento ou
                deixe uma mensagem no formúlario.
              </p>
            </div>
            <div>
              <h2 className="text-base text-white">Canais de atendimento:</h2>
              <div className="flex flex-col gap-3 pt-3">
                <a
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-yellow-color p-4"
                  href="#"
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
                <a
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-yellow-color p-4"
                  href="#"
                >
                  <Image
                    src="/icone-insta.svg"
                    alt="icone instagram"
                    width={22}
                    height={22}
                  />
                  <button className="text-center text-base font-medium text-black">
                    Instagram
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col gap-6">
            <div className="flex w-full flex-col items-start gap-1">
              <label className="text-base text-white" htmlFor="name">
                Nome
              </label>
              <input
                className="w-full rounded-lg border-[1px] border-[#969696] bg-transparent p-3 text-xs text-[#969696]"
                type="text"
                id="name"
                name="name"
                placeholder="Digite seu Nome completo..."
              />
            </div>
            <div className="flex w-full flex-col items-center gap-4 md:flex-row">
              <div className="flex w-full flex-col items-start gap-1">
                <label className="text-base text-white" htmlFor="email">
                  E-mail
                </label>
                <input
                  className="w-full rounded-lg border-[1px] border-[#969696] bg-transparent p-3 text-xs text-[#969696]"
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Digite seu E-mail..."
                />
              </div>
              <div className="flex w-full flex-col items-start gap-1">
                <label className="text-base text-white" htmlFor="telephone">
                  Telefone
                </label>
                <input
                  className="w-full rounded-lg border-[1px] border-[#969696] bg-transparent p-3 text-xs text-[#969696]"
                  type="text"
                  name="telephone"
                  id="telephone"
                  placeholder="Digite seu Telefone..."
                />
              </div>
            </div>
            <div className="flex w-full flex-col items-start gap-1">
              <label className="text-base text-white" htmlFor="message">
                Mensagem
              </label>
              <textarea
                className="w-full resize-none rounded-lg border-[1px] border-[#969696] bg-transparent p-3 text-xs text-[#969696]"
                name="message"
                id="message"
                rows={6}
                placeholder="Fale um pouco sobre o que você esta buscando..."
              ></textarea>
            </div>
            <button className="w-full rounded-lg bg-yellow-color p-4 text-center text-sm text-black">
              Enviar Mensagem
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactPage
