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
                <a className="flex items-center gap-1 text-[#969696]" href="#">
                  <Image
                    src="/icone-wtpp-y.svg"
                    alt="icone whatsapp"
                    width={22}
                    height={22}
                  />
                  (62) 9865-4321
                </a>
                <a className="flex items-center gap-1 text-[#969696]" href="#">
                  <Image
                    src="/icone-map.svg"
                    alt="icone whatsapp"
                    width={16}
                    height={22}
                  />
                  Lorem ipsum dolor sit amet consectetur. Ut tellus nam lacinia
                  augue sollicitudin. Elit pellentesque.
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
            <button className="w-full rounded-lg bg-yellow-color px-4 py-2 text-center text-sm text-black">
              Enviar Mensagem
            </button>
          </div>
        </div>
      </section>
      <section>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3820.538322196867!2d-49.307714588289635!3d-16.749872247143124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef72fbbf1bed5%3A0x2c49090e75daee3!2sEdif%C3%ADcio%20Montreal%20Office!5e0!3m2!1spt-BR!2sbr!4v1729013179001!5m2!1spt-BR!2sbr"
            className="h-[450px] w-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </>
  )
}

export default ContactPage
