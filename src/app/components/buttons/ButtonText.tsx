import { ReactNode } from "react"
import ArrowRight from "../icons/arrow-right"

interface ButtonProps {
    children: ReactNode
}

export default function ButtonText({ children }: ButtonProps){
    return(
        <button
            className="btn btn-text gap-1 items-center"
        >
            <span>{children}</span>
            <ArrowRight className="w-5 h-5" />
        </button>
    )
}