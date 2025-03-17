import { ReactNode } from "react"

interface DescriptionProps {
    children: ReactNode
    className?: string
}

export default function Description({ children, className }: DescriptionProps){
    return(
        <p
            className={`description text-center mt-5 ${className}`}
        >
            {children}
        </p>
    )
}