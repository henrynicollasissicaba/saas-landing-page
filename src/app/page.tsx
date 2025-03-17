import CallToAction from "@/app/components/sections/CallToAction";
import Footer from "@/app/components/sections/Footer";
import Header from "@/app/components/sections/Header";
import Hero from "@/app/components/sections/Hero";
import LogoTicker from "@/app/components/sections/LogoTicker";
import Pricing from "@/app/components/sections/Pricing";
import ProductShowCase from "@/app/components/sections/ProductShowCase";
import Testimonials from "@/app/components/sections/Testimonials";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <LogoTicker />
      <ProductShowCase />
      <Pricing />
      <Testimonials />
      <CallToAction />
      <Footer />
    </>
  );
}
