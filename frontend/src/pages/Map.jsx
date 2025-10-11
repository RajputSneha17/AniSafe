import Header from "../Components/Map/Header";
import RightMap from "../Components/Map/RightMap";
import Sidebar from "../Components/Map/Sidebar";
import ProfileSection from "../Layout/ProfileSection";

const Map = () => {
  return (
    <div>
      <Header />
      <div className="flex flex-col md:flex-row justify-between w-[90%] mx-auto mt-6 mb-15 min-h-[80vh]">
        <Sidebar />
        <RightMap />
      </div>
      <ProfileSection />
    </div>
  );
};

export default Map;
