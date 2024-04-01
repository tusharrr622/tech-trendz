"use client"
import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import React, { useContext, useState } from 'react'
import ShoppingCart from '../icons/ShoppingCart'
import { ProductContext } from '../AppContext'

export default function Header() {
    const { data: session, status, } = useSession()
    const { selectedproducts } = useContext(ProductContext);
    const [mobileNavOpen, setMobileNavOpen] = useState(false);
    return (

        <nav className="bg-white dark:bg-primary  w-full z-20  border-b border-gray-200 dark:border-gray-600">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Tech trendz</span>
                </Link>
                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    {status === 'unauthenticated' && (

                        <>
                            <Link href={'/login'} className="mr-2 text-black bg-white  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-white  dark:focus:ring-blue-800">Login</Link>
                            <Link href={'/register'} className="text-black bg-white  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-white  dark:focus:ring-blue-800">Register</Link>
                        </>
                    )}
                    {status === 'authenticated' && (

                        <>
                            <Link href={'/profile'} className="mt-2 mr-2 text-white">
                                Hello, {session.user.name}
                            </Link>
                            <Link href={'/cart'}>
                                <ShoppingCart />
                            </Link>
                            <span className="text-white"> {selectedproducts.length}</span>
                            <button onClick={() => signOut()} className="mr-6 text-black bg-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-white  dark:focus:ring-blue-800">Log Out</button>
                        </>
                    )}


                    <button data-collapse-toggle="navbar-sticky" type="button" onClick={() => setMobileNavOpen(prev => !prev)}className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                    
                </div>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-primary md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-primary md:dark:bg-primary dark:border-gray-700">
                        <li>
                            <Link href="/" className="block py-2 px-3 text-white rounded md:p-0" aria-current="page">Home</Link>
                        </li>
                        <li>
                            <Link href="/about" className="block py-2 px-3 text-gray-900 rounded md:p-0  dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</Link>
                        </li>
                        <li>
                            <Link href="/products" className="block py-2 px-3 text-gray-900 rounded md:p-0  dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Products</Link>
                        </li>
                        <li>
                            <Link href="/contact" className="block py-2 px-3 text-gray-900 rounded md:p-0  dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
            {mobileNavOpen && (
                        <div
                            onClick={() => setMobileNavOpen(false)}
                            className="md:hidden p-4 rounded-lg mt-2 flex flex-col gap-2 text-center">
                            <ul>
                                <li>
                                    <Link href="/" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-700 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-gray-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">Home</Link>
                                </li>
                                <li>
                                    <Link href="/about" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-700 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-gray-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</Link>
                                </li>
                                <li>
                                    <Link href={'/products'} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-700 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-gray-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Products</Link>
                                </li>
                                <li>
                                    <Link href={'/contact'} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-700 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-gray-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</Link>
                                </li>
                            </ul>
                        </div>
                    )}
        </nav>

    )
}
