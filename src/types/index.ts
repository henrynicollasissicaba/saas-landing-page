import { ReactNode } from "react";

export interface ChildrenProps {
    children: ReactNode
}

export interface TextComponent extends ChildrenProps {
    className?: string
}