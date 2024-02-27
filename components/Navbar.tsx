import Link from "next/link"
import Image from "next/image"

const Navbar = () => {
  return (
    <nav className="flex flex-col justify-center items-center max-container padding-container relative z-30 py-5">
      <Link href="/">
        <div className="flex items-center">
          <Image src="/ethereum-logo.svg" alt="logo" width={100} height={100}/>
        </div>
      </Link>
    </nav>
  )
}

export default Navbar