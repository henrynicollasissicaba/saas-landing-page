import ButtonPrimary from "../buttons/ButtonPrimary";
import ButtonText from "../buttons/ButtonText";

import Image from "next/image";

import cogImage from "@/assets/cog.png"
import cylinderImage from "@/assets/cylinder.png"
import noodleImage from "@/assets/noodle.png"
import Tag from "../Tag";
import Paragraph from "../Paragraph";

export default function Hero(){
    return(
        <section className="pb-20 md:pb-10 md:pt-5 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183ec2,#eaeefe_100%)] overflow-x-clip">
            <div className="container-section">
                <div className="md:flex md:items-center">
                    <div className="md:w-[478px]">
                        <Tag>Version 2.0 is here</Tag>
                        <h1 className="heading">Pathway to productivity</h1>
                        <Paragraph>
                            Celebrate the joy of accomplishment with an app designed to track your progress, 
                            motivate your efforts, and celebrate your successes.
                        </Paragraph>
                        <div className="flex gap-1 items-center mt-[30px]">
                            <ButtonPrimary>Get for free</ButtonPrimary>
                            <ButtonText>Learn more</ButtonText>
                        </div>
                    </div>
                    <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
                        <Image 
                            src={cogImage} 
                            alt="cog image"
                            className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-28"
                        />
                        <Image 
                            src={cylinderImage}
                            alt="cylinder image"
                            width={220}
                            height={220}
                            className="hidden md:block -top-8 -left-32 md:absolute lg:left-0"
                        />
                        <Image 
                            src={noodleImage}
                            alt="cylinder image"
                            width={220}
                            height={220}
                            className="hidden lg:block top-[524px] left-[576px] absolute rotate-[30deg]"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}