// import { getToken } from 'next-auth/jwt';
// import { withAuth } from 'next-auth/middleware';
// import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';
// // import { useSession } from 'next-auth/react';

// const login_page = '/loginForm';

// export default withAuth(
//     async function middleware(req: NextRequest) {
//         const protected_routes = ['/dashboard', '/loginForm'];
//         const { pathname } = req.nextUrl;
//         // const { data: status } = useSession();

//         if(protected_routes.some(route => pathname.startsWith(route))) {
//             const token = await getToken({req, secret: process.env.NEXTAUTH_SECRET});
//             console.log(token);
        
//             if(!token) {
//                 const loginUrl = new URL(login_page, req.url);
//                 return NextResponse.redirect(loginUrl)
//             }
//         }
//         return NextResponse.next();
//     }
// );

// export const config = {
//     matcher: ['/profile/:path*', '/dashboard', '/dashboard/:path*']
// }

// export const middleware = (request: NextRequest) => {
//     console.log("Hello Middleware");
//     return NextResponse.redirect(new URL('/loginForm', request.url));
// }

// export const config = {
//     matcher :['/profile/:path*', '/dashboard/:path*']
// }