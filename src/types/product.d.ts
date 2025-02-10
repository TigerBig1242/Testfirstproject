export type Product = {
    id: number;
    product_name: string;
    description: string?;
    price: number;
    quantity: number;
    image: string;
};

export interface CartItem extends Product {
    quantity: number;
}

// export interface CartItem {
//     id: number;
//     quantity: number;
// }

export interface CartState {
    items: CartItem[];
    total: number;
}