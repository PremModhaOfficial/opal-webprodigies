import { ReactNode } from "react"

type props = {
    children: ReactNode
}
const layout = ({ children }: props) => {
    return <div className="container h-screen flex justify-center">{children} </div>
}

export default layout
