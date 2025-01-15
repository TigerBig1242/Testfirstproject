import NextAuth, { NextAuthOptions } from "next-auth";
import prisma from "@/lib/prisma";
import bcrypt from "bcrypt";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import AuthUser from "../../../../types/auth";

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email", placeholder: "Fill the email" },
                password: { label: "Password", type: "password" }
            },

            async authorize(credentials): Promise <AuthUser | null> {
                try {
                    // Check credentials exist
                    if (!credentials || !credentials.email || !credentials.password) {
                        console.log("No credentials provider");
                        throw new Error("Email and password are required");
                        // return null;
                    }

                    // trim whitespaces
                    const email = credentials.email.trim();
                    const password = credentials.password.trim();

                    // Check username and email is empty
                    if(!email || !password) {
                        console.log("Email or Password is empty");
                        throw new Error("Email and password cannot be empty");
                        // return null;
                    }

                    // Find User
                    const user = await prisma.user.findUnique({
                        where: { email: credentials.email },
                        include: { role: true}
                    });
                    console.log("User found:", user);
                    
                    // Check password user
                    if (user && await bcrypt.compare(credentials.password, user.password)) {
                        return { 
                                id: user.id,
                                username: user.username,
                                email: user.email,
                                firstName: user.first_name,
                                lastName: user.last_name
                        };
                    } else {
                        throw new Error("Invalid password");
                    }
                } catch (error) {
                    console.error(error);
                    throw new Error("Authorization failed");
                    // return null
                }
            }
        }),
    ],
    adapter: PrismaAdapter(prisma),
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: "jwt",
    },
    callbacks: {
        jwt: async({ token, user }) => {
            if(user) {
                token.id = user.id;
                token.username = user.username;
                token.email = user.email;
                token.firstName = user.firstName;
                token.lastName = user.lastName;
            }
            return token;
        },
        session: async({ session, token }) => {
            if(session.user) {
                session.user.id = token.id;
                session.user.username = token.username;
                session.user.email = token.email;
                session.user.firstName = token.firstName;
                session.user.lastName = token.lastName;
            }
            return session;
        }
    },
}
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST }