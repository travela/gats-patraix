import Header from "../components/Header.jsx";
import Hero from "../components/Hero.jsx";
import FeaturedCats from "../components/FeaturedCats.jsx";
import CallToAction from "../components/CallToAction.jsx";
import Footer from "../components/Footer.jsx";

const MainFrame = () => {
  return (
    <>
      <div className="flex flex-col justify-between h-full">
        <Header />
        <Hero />
      </div>
      <CallToAction />
      <Footer />
    </>
  );
};

export default MainFrame;
