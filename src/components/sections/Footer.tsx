import Image from "next/image";
import logo from "@/assets/logosaas.png"
import SocialX from "@/assets/social-x.svg"
import SocialInsta from "@/assets/social-insta.svg"
import SocialLinkedin from "@/assets/social-linkedin.svg"
import SocialPin from "@/assets/social-pin.svg"
import SocialYoutube from "@/assets/social-youtube.svg"

const footerLinks = [
    { id: 1, label: "About" },
    { id: 2, label: "Features" },
    { id: 3, label: "Customers" },
    { id: 4, label: "Pricing" },
    { id: 5, label: "Help" },
    { id: 6, label: "Careers" },
]

export default function Footer(){
    return(
        <footer className="bg-black text-[#bcbcbc] text-sm py-10 text-center">
            <div className="container">
                <div 
                    className="inline-flex relative before:content-[''] before:top-2 before:bottom-0 before:w-full before:absolute
                    before:bg-[linear-gradient(to_right,#f87bff,#fb92cf,#ffdd9b,#c2f0b1,#2fd8fe)] before:blur"
                >
                    <Image src={logo} alt="saas logo" height={40} className="relative" />
                </div>
                <nav className="flex flex-col md:flex-row justify-center gap-6 mt-6">
                    {footerLinks.map(({ id, label }) => (
                        <a 
                            href="#"
                            key={id}
                        >
                            {label}
                        </a>
                    ))}
                </nav>
                <div className="flex justify-center gap-6 mt-6">
                    <SocialX />
                    <SocialInsta />
                    <SocialLinkedin />
                    <SocialPin />
                    <SocialYoutube />
                </div>
                <p className="mt-6">
                    &copy; {new Date().getFullYear()} Your Company, Inc. All rights reserved.
                </p>
            </div>
        </footer>
    )
}