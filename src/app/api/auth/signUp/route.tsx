import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import bcrypt from "bcrypt";

export async function POST(req: NextRequest) {
    try {
        const data = await req.json();
        // Validate blank values
        if(!data) {
            return NextResponse.json({ error: "Please fill data is require" }, {  status: 400});
        }
        const { username, email, password, first_name, last_name, image, birthday, role_id } = data;
        const birthDay = new Date(birthday);
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Validate fill is require
        if(!username || !password || !email || !first_name || !last_name || !image || !birthday) {
            return NextResponse.json({ error: "Please fill all fields" }, { status: 400 });
        }
        
        // Validate Date
        if(isNaN(birthDay.getDate())) {
            return NextResponse.json({ error: "Invalid birthday format" }, { status: 400 });
        }

        // Check username and email exist
        const userExist = await prisma.user.findFirst({
            where: {
                OR: [
                    { username: username },
                    { email: email }
                ]
            }
        });

        if(userExist) {
            return NextResponse.json({ error: "User or Email already exist" }, { status: 400 });
        }

        const userData = {
            username, email, password: hashedPassword, first_name, last_name, image, birthday: birthDay.toISOString(), role_id
        }

        const createUser = await prisma.user.create({ data: userData });

        return Response.json({
            message: "User created successfully",
            status: 201,
            data: {createUser}
        });
    } catch (error) {
        return Response.json({
            message: "User cloud not be created, User already exists",
            error: error,
            status: 500,
            logError: console.log(error)
            
        });
    }
}