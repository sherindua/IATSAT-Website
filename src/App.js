import "./App.css";
import MissionVisionGoal from "./components/MissionVisionGoal";
import PrimaryMissions from "./components/PrimaryMissions";
import Navbar from "./components/Navbar";
import BannerContent from "./components/BannerContent";
import RegistrationForm from "./components/RegistrationForm";
import Blog from "./components/Blog";
import Carousel from "./components/Carousel";
import FAQs from "./components/FAQs";
import Footer from "./components/Footer";
import ContactUs from "./components/ContactUs";

function App() {
  return (
    <div>
      <Navbar />
      <BannerContent />
      <RegistrationForm />
      <br></br>
      <br></br>
      <hr></hr>
      <MissionVisionGoal />
      <br></br>
      <br></br>
      <hr></hr>
      <PrimaryMissions />
      <Blog />
      <FAQs />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
