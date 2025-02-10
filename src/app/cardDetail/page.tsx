'use client'

import CardDetailPage from "../components/cardDetailComponent/cardDetailComponent";
import { CartProvider } from "@/src/context/CartContext";

export default function cardDetailPage() {
    return (
        <h1>
            Card detail page          
            <CartProvider>
                <CardDetailPage/>
            </CartProvider>
        </h1>
    );
}