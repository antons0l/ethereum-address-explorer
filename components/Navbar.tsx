import Link from "next/link"
import Image from "next/image"

const Navbar = () => {
  return (
    <nav className="flex justify-center items-center max-container padding-container relative z-30 py-5">
      <Link href="/">
        <div className="flex items-center">
          <Image src="/ethereum-logo.svg" alt="logo" width={50} height={50}/>
        </div>
      </Link>
      <h1 className="bold-20 sm:bold-20 md:bold-32 lg:bold-40 xl:bold-52 text-slate-700 text-center flex-1">Ethereum Address Explorer</h1>
      
    </nav>
  )
}

export default Navbar