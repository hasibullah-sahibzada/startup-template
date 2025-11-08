import Faq from "./Components/Faq/Faq";
import Footer from "./Components/Footer/Footer";
import HeroSection from "./Components/hero section/HeroSection";
import Modes from "./Components/Modes/Modes";
import Navbar from "./Components/Navbar/Navbar";
import Pricing from "./Components/Pricing/Pricing";
import Register from "./Components/Contact/Contact";
import Services from "./Components/Services/Services";
import Team from "./Components/Team/Team";
import Testimonials from "./Components/Testimonials/Testimonials";

export default function App() {
  return (
    <>
      <Navbar />
      <Modes />
      <HeroSection />
      <Services />
      <Pricing />
      <Team />
      <Faq />
      <Testimonials />
      <Register />
      <Footer />
    </>
  );
}
