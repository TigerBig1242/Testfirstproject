'use client'
import { useState } from "react";
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"

export default function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    const handleSubmit = async(event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setError(null);

        if(!email || !password) {
          setError("Email or Password is require");
          console.log("Error: ", error);
        }
        try {
            const result = await signIn("credentials", {
              redirect: false,
              email,
              password
            })

            if(result?.error) {
              console.log(result?.error);
            }
            else {
              router.push("/dashboard");
            }
        }
        catch (error) {
            console.log("Error:", error);   
            setError("Email or Password is require");
        }
    }

    return (
          <div className="flex h-screen items-center justify-center">
          <form 
            onSubmit={handleSubmit} 
            className="bg-white p-6 rounded-md shadow-md"
          >
            <div className="mb-4 text-black">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
                className="w-full border border-gray-300 px-3 py-2 rounded text-black" // Added border
              />
            </div>
            <div className="mb-4 text-black">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
                className="w-full border border-gray-300 px-3 py-2 rounded text-black" // Added border
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded mb-4"
            >
              Sign In
            </button>
          </form>
        </div>
      );
}