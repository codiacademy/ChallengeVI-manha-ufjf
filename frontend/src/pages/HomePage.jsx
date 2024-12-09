import Header from "../components/Header"; 
import Footer from "../components/Footer"; 
import Card from "../components/Card";

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-t from-gray-400 via-gray-300 to-gray-200">
     <Header />
     <Card />
     <Footer />
      
    </div>
  );
};

export default HomePage;
