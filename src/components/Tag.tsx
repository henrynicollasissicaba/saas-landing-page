import { ReactNode } from "react"

interface TagProps {
    children: ReactNode
    className?: string
}

export default function Tag({ children, className }: TagProps){
    return(
        <div
            className={`text-sm inline-flex border border-[#222]/10 px-3 py-1 rounded-lg tracking-tight ${className}`}
        >
            {children}
        </div>
    )
}