"use client"
import Image from "next/image";
import Link from "next/link";
import Product from "./components/layout/Product";
import { useEffect, useState } from "react";

export default function Home() {

  const [products, setProducts] = useState();


  useEffect(() => {
    fetch('/api/products').then(res => {
      res.json().then(menuItems => {
        const shuffledArray = menuItems.sort(() => Math.random() - 0.5).slice(0, 3);
        setProducts(shuffledArray);
      });
    });
  }, []);


  return (
    <>
    <div className="mt-10 text-center">

      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-white py-1.5 px-1.5 dark:bg-primary md:text-5xl lg:text-4xl"> Your destination for the latest tech gadgets</h1>
    </div>
    <div className="mt-10 ml-4">


      <h2 className="text-4xl font-bold dark:text-gray-900">Discover Our Products</h2>

    

        <div className="grid sm:grid-cols-3 gap-4 overflow-x-scroll snap-x scrollbar-hide">
          {products?.length > 0 && products.map(item => (
            <Product key={item._id} {...item} />
          ))}
        </div>
    
      
    </div>


  </>

  );
}
