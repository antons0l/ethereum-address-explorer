'use client'

import React from 'react'
import Input from './Input'
import Button from './Button'
import { useRouter } from 'next/navigation';

interface FormElements extends HTMLFormControlsCollection {
  addressInput: HTMLInputElement
}
interface AddressFormElement extends HTMLFormElement {
  readonly elements: FormElements
}

const Search = () => {
  const router = useRouter();

    const handleSearch = (event: React.FormEvent<AddressFormElement>) => {
        event.preventDefault();
        const searchToken = event.currentTarget.elements.addressInput.value;
        router.push(`/address/${searchToken}`);
    };
  return (
    <section className="max-container padding-container flex flex-col">
      <div className="relative z-20 flex flex-1 flex-col items-center">
        <p className="regular-20 sm:regular-20 md:regular-32 lg:regular-40 xl:regular-52 neutral-800">
          Check your balance and transactions
        </p>
        <p className="regular-20 sm:regular-20 md:regular-32 lg:regular-40 xl:regular-52 neutral-800">
          on the <span className="text-red-400">Ethereum wallet</span>
        </p>
        <form onSubmit={handleSearch} className="flex flex-col lg:flex-row pt-5">
          <Input id="addressInput" type="text" placeholder="Search by address" />
          <Button type="submit" title="Search"/>
        </form>
      </div>
    </section>
  )
}

export default Search