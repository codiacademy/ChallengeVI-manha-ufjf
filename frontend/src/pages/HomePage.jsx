import Header from "../components/Header"; 
import Footer from "../components/Footer"; 
import Productcard from "../components/Productcard";


const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
     <Header />
     <Productcard />
     <Footer />
      
    </div>
  );
};

export default HomePage;
