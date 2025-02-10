// import { CartItem } from "./product";

import { CartItem } from "./product";

export interface CartContextType {
    cartItems: CartItem[];
    addToCart: (product: CartItem) => void;
    totalQuantity: number;
    // quantity: number;
}