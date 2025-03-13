import productImage from "@/assets/product-image.png"
import pyramidImage from "@/assets/pyramid.png"
import tubeImage from "@/assets/tube.png"

import Image from "next/image"
import Tag from "../Tag"
import Paragraph from "../Paragraph"

export default function ProductShowCase(){
    return(
        <section className="bg-gradient-to-b from-white to-[#d2dcff] py-24 overflow-x-clip">
            <div className="container-section">
                <div className="max-w-[540px] mx-auto">
                    <div className="flex justify-center">
                        <Tag>Boost your productivity</Tag>
                    </div>
                    <h2 className="heading text-center md:leading-[60px] md:text-[54px]">A more effective way to track progress</h2>
                    <Paragraph className="text-center text-[22px] leading-[30px]">
                        Effortlessly turn your ideas into a fully functional, responsive, SaaS website in just minutes with
                        this template
                    </Paragraph>
                </div>
                <div className="relative">
                    <Image 
                        src={productImage} 
                        alt="product image" 
                        className="mt-10" 
                    />
                    <Image 
                        src={pyramidImage} 
                        alt="pyramid image"
                        width={262}
                        height={262}
                        className="hidden md:block absolute -right-36 -top-32" 
                    />
                    <Image 
                        src={tubeImage} 
                        alt="tube image"
                        width={248}
                        height={248}
                        className="hidden md:block absolute bottom-24 -left-36" 
                    />
                </div>
            </div>
        </section>
    )
}