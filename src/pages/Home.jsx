import Features from "../components/Features";
import HeroCarousel from "../components/HeroCarousel";
import Footer from '../components/Footer';
import Navbar from "../components/Navbar";
function Home() {
  return (
    <>
       <Navbar />
    <HeroCarousel />  
    <Features /> 
    <Footer />

    </>
  

  );
}

export default Home;