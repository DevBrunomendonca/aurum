import Image from "next/image"

const CardClients = () => {
  return (
    <div className="flex min-w-[280px] max-w-[280px] flex-col items-start gap-4 rounded-lg bg-[#1d1d1d] p-6 py-8">
      <h4 className="font-[family-name:var(--font-modani-arabic-bold)] text-base text-white">
        Lorem ipsum dolor sit amet
      </h4>
      <p className="text-sm text-white">
        Lorem ipsum dolor sit amet consectetur. Non augue eu consequat
        tincidunt. Tempor ac placerat pulvinar at aliquam mattis adipiscing sed.
      </p>
      <div className="itmes-center flex gap-4">
        <Image
          src="/icone-cliente.svg"
          alt="icone cliente"
          height={44}
          width={44}
        />
        <div className="flex flex-col items-start">
          <span className="font-[family-name:var(--font-modani-arabic-bold)] text-base text-white">
            Lorem ipsum
          </span>
          <span className="text-sm text-white">Gerente de vendas</span>
        </div>
      </div>
    </div>
  )
}

export default CardClients
