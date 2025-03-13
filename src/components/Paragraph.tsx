import { TextComponent } from "@/types";

export default function Paragraph({ children, className }: TextComponent){
    return(
        <p
            className={`text-xl text-[#010d3e] tracking-tight mt-6 ${className}`}
        >
            {children}
        </p>
    )
}