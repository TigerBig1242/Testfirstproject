'use client'

import React, { createContext, useContext, useState, ReactNode } from "react"
import { CartContextType } from "@/src/types/typeForContext"
import { CartItem, Product } from "@/src/types/product";

// interface CartContextType {
//     cartItems: CartItem[];
//     addToCart: (product: CartItem) => void;
//     totalQuantity: number;
//   }

// Create Context
const CartContext = createContext<CartContextType | undefined>(undefined);


// Create provider
export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [cartItems, setCartItems] = useState<Product[]>([]);

    // Function Add to cart 
    const addToCart = (product: CartItem) => {
        // console.log('Add to cart in context page:', product);
            setCartItems((prevItems) => {
                const existingItem = prevItems.find((item) => item.id === product.id);
                if(existingItem) {
                    return prevItems.map((item) => 
                        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                    );
                } else {
                    return [...prevItems, { ...product, quantity: 1 }]
                }
            });
        };

        console.log("cart items:", cartItems);
        
        const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

    return (
        <CartContext.Provider value={{ cartItems, addToCart, totalQuantity }}>
            {children}
        </CartContext.Provider>
    );
};
// Custom Hook เพื่อใช้ Context ได้ง่ายขึ้น
export const useCart = () => {
    const context = useContext(CartContext);
    console.log('CartContext:', context);
    if(!context) {
        throw new Error ("useCart must be used within a CartProvider");
    }
    return context
}


