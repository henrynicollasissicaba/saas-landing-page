"use client"

import ButtonPrimary from "../buttons/ButtonPrimary";
import ButtonText from "../buttons/ButtonText";
import Paragraph from "../Paragraph";
import starImage from "@/assets/star.png"
import springImage from "@/assets/spring.png"
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function CallToAction(){
    const callToActionRef = useRef(null)

    const { scrollYProgress } = useScroll({
        target: callToActionRef,
        offset: ['start end', 'end start']
    })

    const translateY = useTransform(scrollYProgress, [0, 1], [150, -150])

    return(
        <section ref={callToActionRef} className="bg-gradient-to-b from-white to-[#d2dcff] py-24 overflow-x-clip">
            <div className="container-section">
                <div className="container-heading relative">
                    <h2 className="heading text-center md:leading-[80px]">Sign up for free today</h2>
                    <Paragraph className="text-center text-[22px] mt-5 leading-[30px]">
                        Celebrate the joy of accomplishment with an app designed to track your progres and motivate your efforts.
                    </Paragraph>
                    <motion.img 
                        src={starImage.src} 
                        alt="star image" 
                        width={360} 
                        className="md:block absolute -left-[350px] -top-[137px]"
                        style={{
                            translateY
                        }}
                    />
                    <motion.img 
                        src={springImage.src} 
                        alt="spring image" 
                        width={360} 
                        className="md:block absolute -right-[331px] -top-[19px]"
                        style={{
                            translateY
                        }}
                    />
                </div>
                <div className="flex gap-2 justify-center mt-10">
                    <ButtonPrimary>Get for free</ButtonPrimary>
                    <ButtonText>Learn more</ButtonText>
                </div>
            </div>
        </section>
    )
}