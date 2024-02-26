"use client";

import Link from "next/link";

const Error = () => {
  return (
    <main className="mt-5 text-center">
      <h1 className="text-7xl pt-14 font-bold text-red-900">Oops!</h1>
      <p className="text-2xl pt-14 font-light text-gray-600">An error occurred on server, please try again.</p>      
      <p className="mt-6">
        <Link href="/" className="text-cyan-900 hover:text-cyan-700">
          Go back home
        </Link>
      </p>
    </main>
  )
}

export default Error