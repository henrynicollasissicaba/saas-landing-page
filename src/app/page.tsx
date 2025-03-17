import CallToAction from "./components/sections/CallToAction";
import Footer from "./components/sections/Footer";
import Header from "./components/sections/Header";
import Hero from "./components/sections/Hero";
import LogoTicker from "./components/sections/LogoTicker";
import Pricing from "./components/sections/Pricing";
import ProductShowCase from "./components/sections/ProductShowCase";
import Testimonials from "./components/sections/Testimonials";

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
