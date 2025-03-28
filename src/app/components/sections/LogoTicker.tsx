"use client"

import { logoTicker } from "@/app/utils/logo-ticker"
import Image from "next/image"
import { motion } from "framer-motion"

export default function LogoTicker(){
    return(
        <div className="py-8 md:py-12 bg-white">
            <div className="container">
                <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
                    <motion.div 
                        className="flex gap-14 flex-none pr-14"
                        animate={{
                            x: "-50%"
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear",
                            repeatType: "loop",
                        }}
                    >
                        {logoTicker.map((props, index) => (
                            <Image 
                                src={props.src} 
                                alt={props.alt}
                                key={index}
                                className="h-8 w-auto"
                            />
                        ))}

                        {/* Second set of logos for animation */}

                        {logoTicker.map((props, index) => (
                            <Image 
                                src={props.src} 
                                alt={props.alt}
                                key={index}
                                className="h-8 w-auto"
                            />
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    )
}