"use client"

import { Testimonial } from "@/utils/testimonials";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import React from "react";

interface TestimonialsProps {
    testimonials: Testimonial[]
    className?: string
    duration?: number
}

export default function TestimonialsColumn(props: TestimonialsProps){
    return(
        <div className={props.className}>
            <motion.div 
                className="flex flex-col gap-6 pb-6"
                animate={{
                    translateY: "-50%"
                }}
                transition={{
                    repeat: Infinity,
                    ease: "linear",
                    repeatType: "loop",
                    duration: props.duration || 10,
                }}
            >
                {[...new Array(2)].map((_, index) => (
                    <React.Fragment key={index}>
                        {props.testimonials.map(({ text, imageSrc, name, username }, index) => (
                            <div
                                key={index}
                                className="p-10 rounded-3xl shadow-[0_7px_14px_#eaeaea] border border-[#222222]/10 max-w-sm w-full"
                            >
                                <p>{text}</p>
                                <div className="flex items-center gap-2 mt-5">
                                    <Image 
                                        src={imageSrc}
                                        alt={name}
                                        width={40}
                                        height={40}
                                        className="w-10 h-10 rounded-full"
                                    />
                                    <div className="flex flex-col">
                                        <span className="font-medium tracking-tight leading-5">{name}</span>
                                        <span className="leading-5 tracking-tight">{username}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </React.Fragment>
                ))}
            </motion.div>
        </div>
    )
}