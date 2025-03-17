import ArrowIcon from "@/assets/arrow-right.svg"
import { ReactNode } from "react"

interface ButtonProps {
    children: ReactNode
}

export default function ButtonText({ children }: ButtonProps){
    return(
        <button
            className="btn btn-text gap-1 items-center"
        >
            <span>{children}</span>
            <ArrowIcon className="w-5 h-5" />
        </button>
    )
}