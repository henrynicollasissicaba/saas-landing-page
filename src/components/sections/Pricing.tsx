"use client"

import { pricing } from "@/utils";
import Paragraph from "../Paragraph";
import CheckIcon from "@/assets/check.svg"
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

export default function Pricing(){
    return(
        <section className="py-24 bg-white">
            <div className="container-section">
                <div className="container-heading">
                    <h2 className="heading text-center md:leading-[60px] md:text-[54px]">Pricing</h2>
                    <Paragraph className="text-center mt-5">
                        Free forever. Upgrade for unlimited tasks, better security, and exclusive features.
                    </Paragraph>
                </div>
                <div className="flex flex-col gap-8 items-center mt-10 lg:flex-row lg:items-end lg:justify-center">
                    {pricing.map(({ title, monthlyPrice, buttonText, popular, inverse, features }, index) => (
                        <div
                            key={index}
                            className={twMerge("p-10 rounded-3xl shadow-[0_7px_14px_#eaeaea] border border-[#222222]/10 max-w-sm w-full", 
                                inverse && "border-black bg-black text-white"
                            )}
                        >
                            <div className="flex justify-between">
                                <h3 
                                    className={twMerge("text-lg font-bold text-black/50", 
                                        inverse && "text-white/60"
                                    )}
                                >
                                    {title}
                                </h3>
                                {popular && (
                                    <div 
                                        className="inline-flex font-bold px-4 py-1.5 rounded-xl border border-white/20 "
                                    >
                                        <motion.span
                                            className="bg-[linear-gradient(to_right,#dd7ddf,#e1cd86,#bbcb92,#71c2ef,#3bffff,#dd7ddf,#e1cd86,#bbcb92,#71c2ef,#3bffff)]
                                            text-transparent bg-clip-text font-medium [background-size:200%]"
                                            animate={{
                                                backgroundPositionX: '100%'
                                            }}
                                            transition={{
                                                duration: 2,
                                                repeat: Infinity,
                                                ease: "linear",
                                                repeatType: "loop"
                                            }}
                                        >
                                            Popular
                                        </motion.span>
                                    </div>
                                )}
                            </div>
                            <div className="flex items-baseline gap-1 mt-[30px]">
                                <span className="text-4xl font-bold tracking-tighter leading-none">${monthlyPrice}</span>
                                <span 
                                    className={twMerge("tracking-tight font-bold text-black/50", 
                                        inverse && "text-white/60"
                                    )}
                                >
                                    /month
                                </span>
                            </div>
                            <button className={twMerge("btn btn-primary w-full mt-[30px]", 
                                inverse && "bg-white text-black"
                            )}>
                                {buttonText}
                            </button>
                            <ul className="flex flex-col gap-5 mt-8">
                                {features.map((feature, index) => (
                                    <li
                                        key={index}
                                        className="text-sm flex items-center gap-4"
                                    >
                                        <CheckIcon className="w-6 h-6" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}