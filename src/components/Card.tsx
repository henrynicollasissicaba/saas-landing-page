import { ReactNode } from "react"
import { twMerge } from "tailwind-merge"

interface CardProps {
    children: ReactNode
    inverse?: boolean
}

export default function Card({ children, inverse }: CardProps){
    return(
        <div
            className={twMerge("p-10 rounded-3xl shadow-[0_7px_14px_#eaeaea] border border-[#222222]/10 max-w-sm w-full",
                inverse && "border-black bg-black text-white"
            )}
        >
            {children}
        </div>
    )
}