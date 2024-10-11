import Image from "next/image"
import React from "react"

interface CardTeamProps {
  srcImage: string
  titleCard: string
  descriptionCard: string
}

const CardTeam = ({ srcImage, titleCard, descriptionCard }: CardTeamProps) => {
  return (
    <div
      className="bg mx-auto flex w-full max-w-[380px] flex-col gap-4 rounded-md"
      style={{
        backdropFilter: "blur(18px)",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        background: "rgba(8, 13, 16, 0.7)",
      }}
    >
      <Image
        src={srcImage}
        alt={`Imagem de perfil ${titleCard}`}
        width={0}
        height={280}
        sizes="100vw"
        className="w-full rounded-lg border-[1px] border-yellow-color object-cover"
      />
      <div>
        <h4 className="font-[family-name:var(--font-modani-arabic-bold)] text-base text-white">
          {titleCard}
        </h4>
        <p className="max-w-[380px] text-sm text-white opacity-80">
          {descriptionCard}
        </p>
      </div>
    </div>
  )
}

export default CardTeam
