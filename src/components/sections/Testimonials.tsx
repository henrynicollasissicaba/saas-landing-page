import { firstColumnTestimonials, secondColumnTestimonials, thirdColumnTestimonials } from "@/utils/testimonials";
import Paragraph from "../Paragraph";
import Tag from "../Tag";
import TestimonialsColumn from "../TestimonialsColumn";

export default function Testimonials(){
    return(
        <section className="bg-white">
            <div className="container-section">
                <div className="container-heading">
                    <div className="flex justify-center">
                        <Tag>Testimonials</Tag>
                    </div>
                    <h2 className="heading text-center mt-5">What our users say</h2>
                    <Paragraph className="text-center mt-5">
                        From intuitive design to powerful features, our app has become an essential tool for users
                        around the world.
                    </Paragraph>
                </div>
                <div className="flex justify-center gap-6">
                    <TestimonialsColumn testimonials={firstColumnTestimonials} />
                    <TestimonialsColumn testimonials={secondColumnTestimonials} className="hidden md:flex" />
                    <TestimonialsColumn testimonials={thirdColumnTestimonials} className="hidden lg:flex" />
                </div>
            </div>
        </section>
    )
}