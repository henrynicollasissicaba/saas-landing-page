import ArrowRight from "@/assets/arrow-right.svg"
import Logo from "@/assets/logosaas.png"
import MenuIcon from "@/assets/menu.svg"

import Image from "next/image"
import ButtonPrimary from "../buttons/ButtonPrimary"

const menuLinks = [
    { id: 1, label: "About" },
    { id: 2, label: "Features" },
    { id: 3, label: "Customers" },
    { id: 4, label: "Updated" },
    { id: 5, label: "Help" },
]

export default function Header(){
    return(
        <header className="sticky top-0 backdrop-blur-sm z-10">
            <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3">
                <p className="text-white/60 hidden md:block">Streamline your workflow and boost your productivity</p>
                <div className="inline-flex items-center gap-1">
                    <p>Get started for free</p>
                    <ArrowRight className="h-4 w-4 inline-flex justify-center items-center" />
                </div>
            </div>
            <div className="py-5">
                <div className="container-section">
                    <div className="flex items-center justify-between">
                        <Image src={Logo} alt="logo" width={40} height={40} />
                        <MenuIcon className="h-7 w-7 md:hidden" />
                        <nav className="hidden md:flex gap-6 text-black items-center">
                            {menuLinks.map(({ id, label }) => (
                                <a 
                                    href="#" 
                                    key={id}
                                    className="font-bold"
                                >
                                    {label}
                                </a>
                            ))}
                            <ButtonPrimary>Get for free</ButtonPrimary>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}