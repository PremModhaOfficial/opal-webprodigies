import { SignUp } from "@clerk/nextjs"

export default function SignUpPage() {
    return (
        <div className="container h-screen flex justify-center items-center">
            <SignUp></SignUp>
        </div>
    )
}
