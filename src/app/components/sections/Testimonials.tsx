import { firstColumnTestimonials, secondColumnTestimonials, thirdColumnTestimonials } from "@/app/utils/testimonials";
import Tag from "@/app/components/Tag";
import TestimonialsColumn from "@/app/components/TestimonialsColumn";
import Description from "@/app/components/Description";
import Heading from "@/app/components/Heading";

export default function Testimonials(){
    return(
        <section className="bg-white">
            <div className="container">
                <div className="container-heading">
                    <div className="flex justify-center">
                        <Tag>Testimonials</Tag>
                    </div>
                    <Heading className="heading mt-5">
                        What our users say
                    </Heading>
                    <Description className="text-center mt-5">
                        From intuitive design to powerful features, our app has become an essential tool for users
                        around the world.
                    </Description>
                </div>
                <div className="flex justify-center gap-6 mt-10 max-h-[738px] overflow-hidden
                [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]">
                    <TestimonialsColumn testimonials={firstColumnTestimonials} duration={15} />
                    <TestimonialsColumn testimonials={secondColumnTestimonials} className="hidden md:block" duration={19} />
                    <TestimonialsColumn testimonials={thirdColumnTestimonials} className="hidden lg:block" duration={17} />
                </div>
            </div>
        </section>
    )
}