import Image from "next/image"
import React from "react"

interface ProfileTeamProps {
  srcProfile: string
  className?: string
}

const ProfileTeam = ({ srcProfile, className }: ProfileTeamProps) => {
  return (
    <Image
      src={srcProfile}
      alt="Icone Perfil"
      height={80}
      width={80}
      className={`${className} rounded-full border-[1px] border-white`}
    />
  )
}

export default ProfileTeam
