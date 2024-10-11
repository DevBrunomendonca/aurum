import Image from "next/image"
import React from "react"

interface BtnIconProps {
  srcImage: string
  altImage: string
}

const BtnIcon = ({ srcImage, altImage }: BtnIconProps) => {
  return (
    <div className="rounded-full bg-yellow-color p-4">
      <Image src={srcImage} alt={altImage} width={20} height={20} />
    </div>
  )
}

export default BtnIcon
