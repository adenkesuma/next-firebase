'use client'

import React, { FormEvent } from "react";
import Link from "next/link";
import signUp from "@/firebase/auth/signup";
import { useRouter } from 'next/navigation'

function Page() {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const router = useRouter()

    const handleForm = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const { result, error } = await signUp(email, password);

        if (error) {
            return console.log(error)
        }

        // else successful
        console.log(result)
        return router.push("/admin")
    }
    return (
        <div className="container mx-auto">
            <div className="flex justify-center items-center flex-col">
                <h1 className="mt-60 mb-30 font-bold text-2xl mb-6">Sign up</h1>
                <Link href="/signin" className="text-blue-500 text-sm underline mb-6">already have an account?, Sign in</Link>

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
                        Sign up
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Page;