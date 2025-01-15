import { getToken } from 'next-auth/jwt';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
    // const token = request.nextauth.token;
    const path = request.nextUrl.pathname;

    if(path.startsWith('/dashboard')) {
        const token = await getToken({req: request, secret: process.env.NEXTAUTH_SECRET});
        console.log('Token', token);
        
        if(!token) {
            const loginUrl = new URL('/loginForm', request.url);
            return NextResponse.redirect(loginUrl);
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher :['/profile/:path*', '/dashboard/:path*'],
    cookies: { credentials: "include" },
}