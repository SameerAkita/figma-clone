'use server'

import { signUpSchema } from "~/schemas"

export async function register(
    prevState: string | undefined, 
    formData: FormData
) {
    try {
        const { email, password } = await signUpSchema.parseAsync({
            email: formData.get("email"),
            password: formData.get("password"),
        })
    } catch (error) {
        return "ERROR"
    }    
}