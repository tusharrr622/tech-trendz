"use client"
import { useState } from "react";


export default function UserForm({ user, onSave }) {
    const [name, setName] = useState(user?.name || '');
    const [email, setEmail] = useState(user?.email || '');
    const [streetAddress, setStreetAddress] = useState(user?.streetAddress || '');
    const [postalCode, setPostalCode] = useState(user?.postalCode || '');
    const [city, setCity] = useState(user?.city || '');
    const [phone, setPhone] = useState(user?.phone || '');



    return (
        <form className="block max-w-xs mx-auto" onSubmit={ev => onSave(ev, { name, streetAddress, postalCode, city, phone })}>
            <label>
                First and last name
            </label>
            <input type='text' placeholder="Name" value={name}
                onChange={ev => setName(ev.target.value)}
                className='mb-2 bg-primary border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-primary dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            />
            <label>
                Email
            </label>
            <input type="email" placeholder="email" value={email}
                disabled={true}
                className='mb-2 bg-primary border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-primary dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            />

            <label>
                Street Address
            </label>
            <input type='text' placeholder="StreetAddress" value={streetAddress}
                onChange={ev => setStreetAddress(ev.target.value)}
                className='mb-2 bg-primary border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-primary dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />


            <label>
                Postal Code
            </label>
            <input type='text' placeholder="PostalCode" value={postalCode}
                onChange={ev => setPostalCode(ev.target.value)}
                className='mb-2 bg-primary border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-primary dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            />


            <label>
                City
            </label>
            <input type='text' placeholder="City" value={city}
                onChange={ev => setCity(ev.target.value)}
                className='mb-2 bg-primary border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-primary dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            />
            <label>
                Phone
            </label>
            <input type='text' placeholder="Phone" value={phone}
                onChange={ev => setPhone(ev.target.value)}
                className='mb-2 bg-primary border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-primary dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            />
            <button type="submit" className='mt-2 ml-28 text-white bg-primary focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-primary dark:focus:ring-blue-800'>
                Save
            </button>

        </form>
    )
}
