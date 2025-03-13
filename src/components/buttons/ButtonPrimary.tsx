import { ChildrenProps } from "@/types";

export default function ButtonPrimary({ children }: ChildrenProps){
    return(
        <button
            className="btn btn-primary"
        >
            {children}
        </button>
    )
}