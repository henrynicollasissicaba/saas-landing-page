"use client"

import ButtonPrimary from "../buttons/ButtonPrimary";
import ButtonText from "../buttons/ButtonText";
import cogImage from "@/app/assets/cog.png"
import cylinderImage from "@/app/assets/cylinder.png"
import noodleImage from "@/app/assets/noodle.png"
import Tag from "../Tag";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero(){
    const heroRef = useRef(null)

    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ['start end', 'end start']
    })

    const translateY = useTransform(scrollYProgress, [0, 1], [150, -150])

    return(
        <section ref={heroRef} className="pb-20 md:pb-10 md:pt-5 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183ec2,#eaeefe_100%)] overflow-x-clip">
            <div className="container">
                <div className="md:flex md:items-center">
                    <div className="md:w-[478px]">
                        <Tag>Version 2.0 is here</Tag>
                        <h1 className="heading mt-6">Pathway to productivity</h1>
                        <p className="description mt-5">
                            Celebrate the joy of accomplishment with an app designed to track your progress, 
                            motivate your efforts, and celebrate your successes.
                        </p>
                        <div className="flex gap-1 items-center mt-[30px]">
                            <ButtonPrimary>Get for free</ButtonPrimary>
                            <ButtonText>Learn more</ButtonText>
                        </div>
                    </div>
                    <div className="mt-20 md:mt-0 md:h-[624px] md:flex-1 relative">
                        <motion.img 
                            src={cogImage.src} 
                            alt="cog image"
                            className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-28 2xl:left-72"
                            animate={{
                                translateY: [-30, 30]
                            }}
                            transition={{
                                repeat: Infinity,
                                repeatType: "mirror",
                                duration: 4,
                                ease: "easeInOut"
                            }}
                        />
                        <motion.img 
                            src={cylinderImage.src}
                            alt="cylinder image"
                            width={220}
                            height={220}
                            className="hidden md:block -top-8 -left-32 absolute lg:left-0 2xl:left-24"
                            style={{
                                translateY
                            }}
                        />
                        <motion.img 
                            src={noodleImage.src}
                            alt="cylinder image"
                            width={220}
                            height={220}
                            className="hidden lg:block top-[524px] left-[556px] absolute 2xl:left-[776px]"
                            style={{
                                rotate: 30,
                                translateY
                            }}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}