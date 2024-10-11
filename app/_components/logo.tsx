import Image from "next/image"

const Logo = () => {
  return (
    <Image
      src="/logo-aurum.svg"
      alt="Logo Aurum"
      height={28}
      width={145}
      className="cursor-pointer"
    />
  )
}

export default Logo
