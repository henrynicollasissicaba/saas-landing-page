import { StaticImageData } from "next/image";

import socialX from "@/app/assets/social-x.svg"
import socialInsta from "@/app/assets/social-insta.svg"
import socialLinkedin from "@/app/assets/social-linkedin.svg"
import socialPin from "@/app/assets/social-pin.svg"
import socialYoutube from "@/app/assets/social-youtube.svg"

interface LogoSocialProps {
    id: number
    src: StaticImageData
    alt: string
}

const logoSocial: LogoSocialProps[] = [
    { id: 1, src: socialX, alt: "X" },
    { id: 2, src: socialInsta, alt: "Instagram" },
    { id: 3, src: socialLinkedin, alt: "LinkedIn" },
    { id: 4, src: socialPin, alt: "Pin" },
    { id: 5, src: socialYoutube, alt: "YouTube" },
]

export { logoSocial }