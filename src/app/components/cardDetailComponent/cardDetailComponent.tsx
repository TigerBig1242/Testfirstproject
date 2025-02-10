'use client'

import { useCart } from "@/src/context/CartContext";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function CardDetailPage() {
    const { cartItems } = useCart();
    const searchParams = useSearchParams();
    const totalQuantity = searchParams.get("quantity") || "0";

    useEffect(() => {
        console.log(cartItems);
        console.log(totalQuantity);
    }, [cartItems, totalQuantity])
    
    return (
        <div className="max-w-2xl mx-auto mt-26">
            <h1 className="text-2xl font-bold mb-4">Card detail page component</h1>
            {cartItems.length > 0 ? (
            <ul>
            {cartItems.map((item) => (
                <li key={item.id} className="border-b py-4">
                <h2 className="text-lg font-semibold">{item.product_name}</h2>
                <p>Price: ฿ {item.price.toFixed(2)}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Total: {totalQuantity}</p>
                </li>
            ))}
            </ul>
        ) : (
            <p>Your cart is empty</p>
        )}
        </div>
       
    );
}