"use client"
import { SessionProvider } from "next-auth/react"
import { createContext } from "react";
import useLocalStorageState from "use-local-storage-state";


export const ProductContext = createContext({});


export function AppProvider({ children }) {
    const [selectedproducts, setSelectedProducts] = useLocalStorageState('cart', { defaultValue: [] })
    return (
        <SessionProvider>
            <ProductContext.Provider value={{ selectedproducts, setSelectedProducts }}>
                {children}
            </ProductContext.Provider>
        </SessionProvider>
    )
}