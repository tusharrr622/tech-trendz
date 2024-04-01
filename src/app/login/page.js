"use client"
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";


export default function LoginPage() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    async function handleSubmit(ev) {
        ev.preventDefault();
        await signIn('credentials', { email, password, callbackUrl: '/' });

    }


    return (
        <section className="mt-8">
            <h1 className="text-center text-primary text-4xl mb-4">
                Login
            </h1>
            <form className="block max-w-xs mx-auto" onSubmit={handleSubmit}>
                <input type="email" placeholder="email" value={email}
                    onChange={ev => setEmail(ev.target.value)}
                    className='mt-2 bg-primary border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-primary dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                />
                <input type="password" placeholder="password" value={password}
                    onChange={ev => setPassword(ev.target.value)}
                    className='mt-2 bg-primary border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-primary dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'

                />
                <button type="submit" className='mt-2 ml-28 text-white bg-primary focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-primary dark:focus:ring-blue-800'>
                    Login
                </button>
            </form>
        </section>

    )
}
