'use client'

// import { useSession } from "next-auth/react";
// import { useEffect } from "react";
// import { useRouter } from "next/navigation";

export default function DashboardPage() {
    // const { data: session, status } = useSession();
    // const router = useRouter();
    // useEffect(() => {
    //     if(status === 'unauthenticated') {
    //         router.push('/loginForm');
    //     }
    // }, []);
    return (
        // status === 'authenticated' && session.user && (
            <div>
                <h1>Dashboard page</h1>
                <p><a href="/profile">Go to profile</a></p>
            </div>
        // )
    );
}