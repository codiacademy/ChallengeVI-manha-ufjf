import Header from "../components/Header"; 
import Footer from "../components/Footer"; 
import Productcard from "../components/Productcard";
import Card from "../components/Card";


const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-200">
     <Header />
     <Card />
     <Footer />
      
    </div>
  );
};

export default HomePage;
