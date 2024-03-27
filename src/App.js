import "./App.css";
import MissionVisionGoal from "./components/MissionVisionGoal";
import PrimaryMissions from "./components/PrimaryMissions";
import Navbar from "./components/Navbar";
import BannerContent from "./components/BannerContent";
import RegistrationForm from "./components/RegistrationForm";
import Blog from "./components/Blog";
import Carousel from "./components/Carousel";

function App() {
  return (
    <div>
      <Navbar />
      <BannerContent />
      <div className="flex flex-col flex-wrap gap-20">
        <RegistrationForm />

        <Carousel />
      </div>
      <hr></hr>
      <MissionVisionGoal />
      <Blog />
      <PrimaryMissions />
    </div>
  );
}

export default App;
