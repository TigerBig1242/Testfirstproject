'use client'

// import React, { useState } from "react"
// import type { Product } from "@/src/types/product"
// import cardProduct from "@/src/components/card/cardProduct"
import React from 'react';
// import Link from 'next/link';
// import { CartItem } from "@/src/types/product"
// import { useCart } from '@/src/context/CartContext';
// import { CartContextType } from '@/src/types/typeForContext';

// export const CartPage = (): Promise<Product[]> => {
//     const [cart, setCart] = useState<Product[]>([]);

//     const addCart = (product: Product) => {    
//         setCart([...cart, product]);
//     }
//     return (
//         <div>
//             <button onClick={() => addCart({id: 1, product_name: "Macbook", price: 10000, quantity: 1, description: "", image: "https://images.unsplash.com/photo-1595675024853-0f3ec9098ac7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"})}>
//                 Add cart
//             </button>
//         </div>
//     );
// }

// export default function Cart() {
//     const [cartCount, setCartCount] = useState<number>(0);

//     const addCart = () => {
//         // setCartCount((prevCount) => prevCount + 1);
//         setCartCount(cartCount + 1);
//     }

//     return (
//         <div className="min-h-screen flex flex-col items-center justify-center">
//           {/* ไอคอนตะกร้าสินค้า */}
//           <div className="relative">
//             <button className="text-3xl">
//               🛒
//               {/* {cartCount > 0 && (
//                 <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full px-2 text-sm">
//                   {cartCount}
//                 </span>
//               )} */}
//             </button>
//           </div>
    
//           {/* ปุ่มเพิ่มสินค้า */}
//           <button
//             onClick={addCart}
//             className="mt-5 px-4 py-2 bg-blue-500 text-white rounded-lg"
//           >
//             Add to Cart
//           </button>
//         </div>
//       );
// }

interface CartComponentProps {
  // id: number;
  quantity: number;
}

// export const CartPage: React.FC<CartComponentProps> = ({ count }) => {
//   return (
//     <div className="relative">
//       <button className="text-3xl">
//         🛒
//         {count > 0 && (
//           <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full px-2 text-sm">
//             {count}
//           </span>
//         )}
//       </button>
//     </div>
//   );
// }

//-------------------------------------------------------------------------------------------------------------------------- 

export const CartPage: React.FC<CartComponentProps> = ({ quantity }) => {
  // const { totalQuantity } = useCart();

  return (
    <div className="relative">
      <button className="text-3xl">
        {/* <Link href="/cardDetail">🛒 */}
        🛒
          {quantity > 0 && (
            <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full px-2 text-sm">
              {quantity}
            </span>
          )}
        {/* </Link> */}
      </button>
    </div>
  );
};