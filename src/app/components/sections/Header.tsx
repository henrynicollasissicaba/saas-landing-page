import Image from "next/image"
import ButtonPrimary from "@/app/components/buttons/ButtonPrimary"
import ArrowRight from "../icons/arrow-right";
import Menu from "../icons/menu";

export default function Header(){
    const menuLinks = [
        { id: 1, label: "About" },
        { id: 2, label: "Features" },
        { id: 3, label: "Customers" },
        { id: 4, label: "Updated" },
        { id: 5, label: "Help" },
    ]

    return(
        <header className="sticky top-0 backdrop-blur-sm z-10">
            <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3">
                <p className="text-white/60 hidden md:block">Streamline your workflow and boost your productivity.</p>
                <div className="inline-flex items-center gap-1">
                    <p>Get started for free</p>
                    <ArrowRight className="h-4 w-4 inline-flex" />
                </div>
            </div>
            <div className="py-5">
                <div className="container">
                    <div className="flex items-center justify-between">
                        <Image src="/logosaas.png" alt="logo" width={40} height={40} />
                        <Menu className="h-7 w-7 md:hidden" />
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