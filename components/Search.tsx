'use client'

import React from 'react'
import Input from './Input'
import Button from './Button'
import { useRouter } from 'next/navigation';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer, Bounce } from 'react-toastify';

interface FormElements extends HTMLFormControlsCollection {
  addressInput: HTMLInputElement
}
interface AddressFormElement extends HTMLFormElement {
  readonly elements: FormElements
}

const Search = () => {
  const router = useRouter();

  const validateEthereumAddress = (input: string) => {
    const regex = /^0x[a-fA-F0-9]{40}$/;
    return regex.test(input);
  };

  const showError = () => {
    toast.error('Please enter a valid Ethereum address!', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  const handleSearch = (event: React.FormEvent<AddressFormElement>) => {
      event.preventDefault();
      const searchToken = event.currentTarget.elements.addressInput.value;
      if (!validateEthereumAddress(searchToken)) {
        showError();
        return;
      }
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
      <ToastContainer />
    </section>
  )
}

export default Search