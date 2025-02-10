"use client";

// import { useState, useEffect } from "react";
// import type { Product } from "@/src/types/product";
// import Image from "next/image";
import Product from "../components/card/cardProductContext";
// import Product from "../components/card/cardProduct";
import { CartProvider } from "@/src/context/CartContext";
// import Cart from "../components/cart/cartComponent";

// async function fetchProducts(): Promise<Product[]> {
//     const res = await fetch("../api/products");
//     const data = await res.json();
//     console.log(data);
//     return data;
// }

// export default function Product() {
//     const [data, setData] = useState<Product[]>([]);

//     useEffect(() => {
//         fetchProducts().then(setData);
//     }, []);

//     return (
//         <div className="flex flex-row items-center shadow-md p-6 hover:shadow-lg transition-shadow duration-300 max-w-screen-2xl mx-auto mt-12 gap-x-4">
//                 {data.map((product) => (
//                     <div
//                         key={product.id}
//                         className="flex flex-col items-center bg-gray-300 border border-gray-500 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
//                     >
//                         <Image
//                             src={product.image}
//                             alt="Macbook"
//                             className="w-50 h-48 object-cover rounded-md mb-4"
//                             width={500}
//                             height={500}
//                         />
//                         <h2 className="text-lg font-semibold text-gray-800 mb-2">
//                             {product.product_name}
//                         </h2>
//                         {/* <p className="text-sm text-gray-500 mb-4">
//                             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
//                             convallis.
//                         </p> */}
//                         <div className="flex items-center justify-between w-full">
//                            <span className="text-xl font-bold text-gray-800">
//                             ฿ {product.price.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
//                            </span>
//                             <button className="bg-blue-500 text-black text-base font-medium px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-200">
//                                 Add cart
//                             </button>
//                         </div>
//                     </div>
//                 ))}
//         </div>
// ------------------------------------------------------------------------------------------------------------------------
        /* From Uiverse.io by Javierrocadev */
        //  <div className=" flex flex-row max-w-screen-2xl mx-auto h-80 mt-12 bg-gray-50 max-auto p-6 rounded-2xl gap-x-6">
        //      {data.map((product) => (
        //          <div className=" flex flex-col items-center p-6 h-48 rounded-xl"
        //              key={product.id}
        //          >
        //                  <Image
        //                      src={product.image}
        //                      alt="Macbook"
        //                      className="h-48 object-cover rounded-md mb-4"
        //                      width={500}
        //                      height={500}
        //                  />
        //              <div className="flex flex-col gap-4">
        //              <div className="flex flex-row justify-between">
        //                  <div className="flex flex-col">
        //                      <span className="text-xl font-bold">{product.product_name}</span>
        //                      <p className="text-xs text-gray-700">{product.description}</p>
        //                  </div>
        //                  <span className="font-bold  text-red-600">${product.price}</span>
        //              </div>
        //             <button className="hover:bg-sky-700 text-gray-50 bg-sky-800 py-2 rounded-md">
        //                  Add to cart
        //              </button>
        //             </div>
        //          </div>         
        //      ))}
        //  </div>
//     );
// }

// ------------------------------------------------------------------------------------------------------------------------
export default function Products() {
    return (
        <div>
            {/* <Product/> */}
            {/* <addCart/> */}
            <CartProvider>
                <Product/>
            </CartProvider>
        </div>
    );
}
