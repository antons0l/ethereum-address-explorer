import Link from "next/link"

const NotFound = () => {
  return (
    <main className="mt-5 text-center">
      <h1 className="text-7xl pt-14 font-bold text-gray-800">404</h1>
      <p className="text-2xl pt-14 font-light text-gray-600">Page not found</p>
      <p className="mt-6">
        <Link href="/" className="text-cyan-900 hover:text-cyan-700">
          Go back home
        </Link>
      </p>
    </main>
  )
}

export default NotFound