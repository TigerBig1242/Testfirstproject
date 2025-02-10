'use client'

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/src/context/CartContext";
import type { Product } from "@/src/types/product";
import { CartPage } from "../cart/cartComponent";

export async function fetchProducts(): Promise<Product[]> {
    const res = await fetch("../api/products");
    const data = await res.json();
    console.log(data);
    return data;
}

export default function Product() {
    const [data, setData] = useState<Product[]>([]);
    // const { addToCart, cartItems } = useCart();
    const { addToCart, totalQuantity } = useCart();
    // const [isClient, setClient] = useState(false);
    console.log('cartItems in card product page:', totalQuantity);
    console.log('add total in card product page:', addToCart);

    useEffect(() => {
        fetchProducts().then(setData);
        // setClient(true);
    }, []);

    return (
            <div className="flex flex-row items-center shadow-md p-6 hover:shadow-lg transition-shadow duration-300 max-w-screen-2xl mx-auto mt-20 gap-x-4">
                    <div className="absolute top-8 right-56 p-2">
                            {/* <CartPage count={cartItems.reduce((total, item) => total + item.quantity, 0)}/> */}
                            <Link href={`/cardDetail?quantity=${totalQuantity}`}>
                                <CartPage quantity={totalQuantity}/>
                            </Link>
                    </div>
                    {data.map((product) => (
                        <div
                            key={product.id}
                            className="flex flex-col items-center bg-gray-300 border border-gray-500 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
                        >
                            {/* <div className="absolute top-8 right-24 p-2">
                                <CartPage count = {cartCount}/>
                            </div> */}
                            <Image
                                src={product.image}
                                alt={"product.description"}
                                className="w-50 h-48 object-cover rounded-md mb-4"
                                width={500}
                                height={500}
                            />
                            <h2 className="text-lg font-semibold text-gray-800 mb-2">
                                {product.product_name}
                            </h2>
                            {/* <p className="text-sm text-gray-500 mb-4">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                                convallis.
                            </p> */}
                            <div className="flex items-center justify-between w-full">
                               <span className="text-xl font-bold text-gray-800">
                                ฿ {product.price.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                               </span>
                               {/* <CartPage count = {cartCount}/> */}
                                <button 
                                    className="bg-blue-500 text-black text-base font-medium px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-200"
                                    onClick={() => {
                                        addToCart({ ...product, quantity: 1});
                                        // console.log("Add to cart", product);
                                    }}
                               >
                                    Add cart
                                </button>
                            </div>
                        </div>
                    ))}
            </div>
        );
}

