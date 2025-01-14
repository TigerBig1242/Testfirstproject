import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
    const products = await prisma.products.findMany();
    return NextResponse.json(products);
}

export async function POST(req: NextRequest) {
    const { id, product_name } = await req.json();
    console.log("ID:", id);
    console.log("Product Name:", product_name);
    try {
        const find_product = await prisma.products.findFirst({ 
            where: { 
                    id: id,
                    product_name: {
                        equals: product_name,
                        mode: "insensitive"
                    },
                },
         });

         if(!find_product) {
            return NextResponse.json("Cannot find product", { status: 404 });
         }
        //  throw new Error("Cannot find product");
        console.log("Product found:", find_product);
         return NextResponse.json(find_product);
    } catch (error) {
        console.log(error);
        
    }
}