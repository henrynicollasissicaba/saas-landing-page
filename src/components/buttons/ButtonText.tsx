import { ChildrenProps } from "@/types";
import ArrowIcon from "@/assets/arrow-right.svg"

export default function ButtonText({ children }: ChildrenProps){
    return(
        <button
            className="btn btn-text gap-1 items-center"
        >
            <span>{children}</span>
            <ArrowIcon className="w-5 h-5" />
        </button>
    )
}