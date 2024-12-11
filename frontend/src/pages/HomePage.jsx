import Header from "../components/Header"; 
import Footer from "../components/Footer"; 
import Card from "../components/Card";
import ProductCarousel from "../components/ProductCarousel";
import Productcard from "../components/Productcard";


const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col  bg-gradient-to-b from-violet-100 to-violet-300">
     <Header />
     <ProductCarousel/>
     <Card/>
     <Footer />
      
    </div>
  );
};

export default HomePage;
