"use client"
import React, { useContext, useEffect, useState } from 'react'
import { ProductContext } from '../components/AppContext';

export default function CartPage() {
    const { selectedproducts, setSelectedProducts } = useContext(ProductContext);
    const [productsInfos, setProductsInfos] = useState([]);
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [name, setName] = useState('');

    useEffect(() => {
        const fetchProducts = async () => {
            const uniqIds = [...new Set(selectedproducts)];
            if (uniqIds.length > 0) {
                const response = await fetch('/api/products?ids=' + uniqIds.join(','))
                const data = await response.json();
                setProductsInfos(data);
            } else {
                setProductsInfos([]);
            }
        };
        fetchProducts();
    }, [selectedproducts])

    console.log(productsInfos);

    function moreOfThisProduct(id) {
        setSelectedProducts(prev => [...prev, id])
    }

    function lessOfThisProduct(id) {
        const pos = selectedproducts.indexOf(id);
        if (pos !== -1) {
            setSelectedProducts(prev => {
                return prev.filter((value, index) => index !== pos)
            })
        }
    }


    function handleSubmit(ev) {
        ev.preventDefault();

        fetch('/api/checkout', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                selectedproducts,
                address,
                city,
                name,
            })
        }).then(async (response) => {
            window.location = await response.json();
        })
    }


    const delivery = 5;
    let subtotal = 0;
    if (selectedproducts?.length) {
        for (let id of selectedproducts) {
            const price = parseFloat(productsInfos.find(p => p._id == id)?.price) || 0;
            subtotal += price;
        }
    }

    const total = subtotal + delivery;

    return (
        <div>
            {!selectedproducts.length && (
                <div>
                    No Products in your shopping cart
                </div>
            )}
            {selectedproducts.length > 0 && productsInfos.map(productInfo => {
                return (
                    <div className="flex mb-5 mt-5" key={productInfo._id}>
                        <div className="bg-gray-100 p-3 rounded-xl shrink-0">
                            <img className="w-24" src={productInfo.picture} />
                        </div>
                        <div className="pl-4">
                            <h3 className="font-bold text-lg">{productInfo.name}</h3>
                            <p className="text-sm leading-4 text-gray-500">{productInfo.description}</p>
                            <div className="flex">
                                <div className="grow">${productInfo.price}</div>
                                <div>
                                    <button onClick={() => lessOfThisProduct(productInfo._id)} className="border border-blue-700 px-2 rounded-lg text-black-500">-</button>
                                    <span className="px-2">

                                        {selectedproducts.filter(id => id === productInfo._id).length}
                                    </span>
                                    <button onClick={() => moreOfThisProduct(productInfo._id)} className="text-white bg-blue-700 px-2 rounded-lg text-white">+</button>
                                </div>
                            </div>
                        </div>
                    </div>

                )

            })}
            <form onSubmit={handleSubmit}>
                <div className="mt-4">
                    <input name="address" value={address} onChange={ev => setAddress(ev.target.value)} className="bg-gray-100 w-full rounded-lg px-4 py-2 mb-2" type="text" placeholder="Street address ,number" />
                    <input name="city" value={city} onChange={ev => setCity(ev.target.value)} className="bg-gray-100 w-full rounded-lg px-4 py-2 mb-2" type="text" placeholder="City and postal code" />
                    <input name="name" value={name} onChange={ev => setName(ev.target.value)} className="bg-gray-100 w-full rounded-lg px-4 py-2 mb-2" type="text" placeholder="Your Name" />
                </div>
                <div className="mt-4">
                    <div className="flex my-3">
                        <h3 className="grow font-bold text-gray-400">SubTotal:</h3>
                        <h3 className="font-bold">${subtotal}</h3>
                    </div>
                    <div className="flex my-3">
                        <h3 className="grow font-bold text-gray-400">Delivery:</h3>
                        <h3 className="font-bold">${delivery}</h3>
                    </div>
                    <div className="flex my-3 border-t pt-3 border-dashed border-blue-700">
                        <h3 className="grow font-bold text-gray-400">Total:</h3>
                        <h3 className="font-bold">${total}</h3>
                    </div>
                </div>


                <button type='submit' className="bg-blue-700 px-5 py-2 rounded-xl font-bold text-white w-full my-4 shadow-lg">Pay ${total}</button>
            </form>
        </div>

    )

}
