import "./global.css";
import Header1 from "./components/Header1";
import Header2 from "./components/Header2";
import HeroSection from "./components/HeroSection";
import Partners from "./components/Partners";
import Partnerslist from "./components/Partnerslist";
import Advantages from "./components/Advantages";
import About from "./components/About";
import AdvOverComp from "./components/AdvOverComp";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header1 />
      <Header2 />
      <HeroSection />
      <Partners />
      <Partnerslist />
      <Advantages />
      <About />
      <AdvOverComp />
      <Pricing />
      <Footer />
    </>
  );
};

export default App;
