import { ReactNode } from "react"
import { twMerge } from "tailwind-merge"

interface ButtonProps {
    children: ReactNode
    className?: string
    inverse?: boolean
}

export default function ButtonPrimary({ children, className, inverse }: ButtonProps){
    return(
        <button
            className={twMerge(`btn btn-primary ${className}`, inverse && "bg-white text-black")}
        >
            {children}
        </button>
    )
}