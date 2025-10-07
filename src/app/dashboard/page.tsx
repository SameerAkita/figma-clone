'use client'

import { signout } from "../actions/auth"

export default function Page() {
    return (
        <div>
            <p>my dashboard</p>
            <button onClick={() => signout()}>Sign out</button>
        </div>
    )
}