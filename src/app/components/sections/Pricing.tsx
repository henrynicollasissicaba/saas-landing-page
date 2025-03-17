"use client"

import { pricing } from "@/app/utils/pricing";
import { twMerge } from "tailwind-merge";
import Description from "@/app/components/Description";
import Heading from "@/app/components/Heading";
import Card from "@/app/components/Card";
import PopularTag from "@/app/components/PopularTag";
import ButtonPrimary from "@/app/components/buttons/ButtonPrimary";
import Check from "../icons/check";

export default function Pricing(){
    return(
        <section className="py-24 bg-white">
            <div className="container">
                <div className="container-heading">
                    <Heading className="heading mt-5 md:leading-[60px] md:text-[54px]">
                        Pricing
                    </Heading>
                    <Description className="text-center mt-5">
                        Free forever. Upgrade for unlimited tasks, better security, and exclusive features.
                    </Description>
                </div>
                <div className="flex flex-col gap-8 items-center mt-10 lg:flex-row lg:items-end lg:justify-center">
                    {pricing.map(({ title, monthlyPrice, buttonText, popular, inverse, features }, index) => (
                        <Card key={index} inverse={inverse}>
                            <div className="flex justify-between">
                                <h3 
                                    className={twMerge("text-lg font-bold text-black/50", 
                                        inverse && "text-white/60"
                                    )}
                                >
                                    {title}
                                </h3>
                                {popular && <PopularTag />}
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
                            <ButtonPrimary className="w-full mt-[30px]" inverse={inverse}>
                                    {buttonText}
                            </ButtonPrimary>
                            <ul className="flex flex-col gap-5 mt-8">
                                {features.map((feature, index) => (
                                    <li
                                        key={index}
                                        className="text-sm flex items-center gap-4"
                                    >
                                        <Check className="w-6 h-6" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}