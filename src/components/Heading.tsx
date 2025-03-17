import { ReactNode } from "react"

interface HeadingProps {
    children: ReactNode
    className?: string
}

export default function Heading({ children, className }: HeadingProps){
    return(
        <h2
            className={`heading text-center ${className}`}
        >
            {children}
        </h2>
    )
}