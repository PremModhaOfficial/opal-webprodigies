import { SignIn } from "@clerk/nextjs"

export default function SignInPage() {
    return (
        <div className="container h-screen flex justify-center items-center">
            <SignIn></SignIn>
        </div>
    )
}
