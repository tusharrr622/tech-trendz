"use client"
import Link from 'next/link'
import { redirect } from 'next/navigation';
import React, { useState } from 'react'

export default function RegisterPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userCreated, setUserCreated] = useState(false);
    async function handleSubmit(ev) {
        ev.preventDefault();
        const res = await fetch('/api/register', {
            method: 'POST',
            body: JSON.stringify({ name, email, password }),
            headers: { 'Content-Type': 'application/json' },
        })
        if (res.ok) {
            setUserCreated(true)
        }
    }

    if (userCreated) {
        return redirect('/');
    }


    return (
        <section className="mt-8">
            <h1 className="text-center text-primary text-4xl mb-4">
                Register
            </h1>
            <form className="block max-w-xs mx-auto" onSubmit={handleSubmit}>
                <input type='text' placeholder="name" value={name}
                    onChange={ev => setName(ev.target.value)}
                    className='bg-primary border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-primary dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                />
                <input type="email" placeholder="email" value={email}
                    onChange={ev => setEmail(ev.target.value)}
                    className='mt-2 bg-primary border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-primary dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                />
                <input type="password" placeholder="password" value={password}
                    onChange={ev => setPassword(ev.target.value)}
                    className='mt-2 bg-primary border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-primary dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'

                />
                <button type="submit" className='mt-2 ml-28 text-white bg-primary focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-primary dark:focus:ring-blue-800'>
                    Register
                </button>
                <div className="text-center my-4 text-gray-500 border-t pt-4">
                    Existing account?{' '}
                    <Link className="underline" href={'/login'}>Login here &raquo;</Link>
                </div>
            </form>
        </section>

    )
}
