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
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20">
      <div className="relative z-20 flex flex-1 flex-col items-center">        
        <p className="text-sm lg:text-lg text-gray-500">
          Search an ethereum address to see its balance and transactions.
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