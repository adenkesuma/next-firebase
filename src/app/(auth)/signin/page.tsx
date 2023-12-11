'use client'

import React, { FormEvent } from "react";
import signIn from "@/firebase/auth/signin";
import { useRouter } from 'next/navigation'
import Link from "next/link";

function Page() {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const router = useRouter()

    const handleForm = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const { result, error } = await signIn(email, password);

        if (error) {
            return console.log(error)
        }

        console.log(result)
        return router.push("/admin")
    }
    return (
        <div className="container mx-auto">
            <div className="flex justify-center items-center flex-col">
                <h1 className="mt-60 mb-30 font-bold text-2xl mb-6">Sign In</h1>
                <Link href="/signup" className="text-blue-500 text-sm underline mb-6">dont have an account?, Sign up</Link>

                <form onSubmit={handleForm} className="form flex flex-col gap-6">
                    <label htmlFor="email">
                        <p className="text-sm">Email</p>
                        <input 
                            onChange={(e) => setEmail(e.target.value)} 
                            required 
                            type="email" 
                            name="email" 
                            id="email" 
                            placeholder="example@mail.com" 
                            className="p-2 rounded-md"
                        />
                    </label>
                    <label htmlFor="password">
                        <p className="text-sm">Password</p>
                        <input 
                            onChange={(e) => setPassword(e.target.value)} 
                            required 
                            type="password" 
                            name="password" 
                            id="password" 
                            placeholder="password" 
                            className="rounded-md p-2"
                        />
                    </label>

                    <button type="submit" className="bg-blue-500 mx-auto p-2 rounded-md mt-3 w-28 flex justify-center items-center">
                        Sign in
                    </button>
                </form>

            </div>
        </div>
    );
}

export default Page;