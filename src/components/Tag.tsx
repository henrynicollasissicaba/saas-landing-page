import { TextComponent } from "@/types";

export default function Tag({ children, className }: TextComponent){
    return(
        <div
            className={`text-sm inline-flex border border-[#222]/10 px-3 py-1 rounded-lg tracking-tight ${className}`}
        >
            {children}
        </div>
    )
}