"use client"

import productImage from "@/assets/product-image.png"
import pyramidImage from "@/assets/pyramid.png"
import tubeImage from "@/assets/tube.png"
import Image from "next/image"
import Tag from "../Tag"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Description from "../Description"
import Heading from "../Heading"

export default function ProductShowCase(){
    const sectionRef = useRef(null)

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start end', 'end start']
    })

    const translateY = useTransform(scrollYProgress, [0, 1], [150, -150])
    return(
        <section ref={sectionRef} className="bg-gradient-to-b from-white to-[#d2dcff] py-24 overflow-x-clip">
            <div className="container">
                <div className="container-heading">
                    <div className="flex justify-center">
                        <Tag>Boost your productivity</Tag>
                    </div>
                    <Heading className="heading text-center md:leading-[60px] md:text-[54px] mt-6">
                        A more effective way to track progress
                    </Heading>
                    <Description className="text-center text-[22px] leading-[30px] mt-5">
                        Effortlessly turn your ideas into a fully functional, responsive, SaaS website in just minutes with
                        this template
                    </Description>
                </div>
                <div className="relative">
                    <Image 
                        src={productImage} 
                        alt="product image" 
                        className="mt-10" 
                    />
                    <motion.img 
                        src={pyramidImage.src} 
                        alt="pyramid image"
                        width={262}
                        height={262}
                        className="hidden md:block absolute -right-36 -top-32"
                        style={{
                            translateY
                        }}
                    />
                    <motion.img 
                        src={tubeImage.src} 
                        alt="tube image"
                        width={248}
                        height={248}
                        className="hidden md:block absolute bottom-24 -left-36"
                        style={{
                            translateY
                        }}
                    />
                </div>
            </div>
        </section>
    )
}