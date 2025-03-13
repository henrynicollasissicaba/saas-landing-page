import { logoTicker } from "@/utils"
import Image from "next/image"

export default function LogoTicker(){
    return(
        <div className="py-8 md:py-12 bg-white">
            <div className="container-section">
                <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
                    <div className="flex gap-14 flex-none">
                        {logoTicker.map((props, index) => (
                            <Image 
                                src={props.src} 
                                alt={props.alt}
                                key={index}
                                className="h-8 w-auto"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}