'use client'

import Link from "next/link";
import { useActionState } from "react";

export default function Page() {
    const [errorMessage, formAction, isPending] = useActionState(
        register,
        undefined
    )
    return (
        <div className="justify-center bg-white flex min-h-screen items-center px-4">
            <div className="w-full max-w-sm space-y-6">
                <h1 className="text-center text-2xl font-semibold text-gray-900">
                    Sign up
                </h1>
                <form className="space-y-4">
                    <div className="relative h-fit">
                        <input 
                            className="rounded-md w-full border border-gray-300 text-sm px-3 pb-1 pt-7 focus:border-black focus:outline-none" 
                            type="email" 
                            name="email" 
                            required
                        >
                        </input>
                        <label className="absolute left-3 top-2 text-[12px]">
                            EMAIL
                        </label>
                    </div>
                    <div className="relative h-fit">
                        <input 
                            className="rounded-md w-full border border-gray-300 text-sm px-3 pb-1 pt-7 focus:border-black focus:outline-none" 
                            type="password" 
                            name="password" 
                            required
                            minLength={8}
                        >
                        </input>
                        <label className="absolute left-3 top-2 text-[12px]">
                            PASSWORD
                        </label>
                    </div>

                    <button className="w-full rounded-md bg-black text-white text-sm py-2 font-medium hover:bg-gray-700 hover:cursor-pointer focus:outline-none disabled:cursor-not-allowed disabled:bg-gray-300">
                        Register
                    </button>

                    <p className="text-center text-xs text-blue-400 hover:text-blue-600">
                        <Link href={"/signin"}>Have an account?</Link>
                    </p>

                    {errorMessage && <p className="text-center text-sm text-red-500">{errorMessage}</p>}
                </form>
            </div>
        </div>
    )
}