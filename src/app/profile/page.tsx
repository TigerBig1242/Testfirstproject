'use client'

import { useSession, signOut, getSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Profile() {
    const { data: session, status} = useSession(); 
    const router = useRouter();

    const protectedPage = async () => {
        const get_session = await getSession();
        console.log(get_session);
    }

    protectedPage();
    
    useEffect(() => {
        if(status === 'unauthenticated') {
            router.push('/loginForm');
        }
    }, [status, router])

    return (
        status === 'authenticated' && session.user && (
            <div className="flex h-screen items-center justify-center">
                <div className="bg-white p-6 rounded-md shadow-md text-black">
                    <p>
                        Welcome, <b>{session.user.username}</b>
                    </p>
                    <p>Email: {session.user.email}</p>
                    <p>First Name: {session.user.firstName}</p>
                    <p>Last name: {session.user.lastName}</p>
                    <button
                        onClick={() => signOut({ callbackUrl: '/loginForm' })}
                        className="w-full bg-blue-500 text-black py-2 rounded"
                        >
                        Logout
                    </button>
                </div>
            </div>
            
        )
    );
}