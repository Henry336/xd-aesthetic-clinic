import Header from "./components/Header";
import Hero from "./components/Hero";
import TrustStrip from "./components/TrustStrip";
import About from "./components/About";
import Treatments from "./components/Treatments";
import Spotlight from "./components/Spotlight";
import Products from "./components/Products";
import Journal from "./components/Journal";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <About />
        <Treatments />
        <Spotlight />
        <Products />
        <Journal />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
