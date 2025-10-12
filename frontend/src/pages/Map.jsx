import Header from "../Components/Map/Header";
import RightMap from "../Components/Map/RightMap";
import Sidebar from "../Components/Map/Sidebar";
import ProfileSection from "../Layout/ProfileSection";
import { ToastContainer, toast } from 'react-toastify';
const Map = () => {
    const notify = () => toast("Sorry, this feature is not implemented yet!");

  return (
    <div>
      <ToastContainer />
      <Header />
      <div className="flex flex-col md:flex-row justify-between w-[90%] mx-auto mt-6 mb-15 min-h-[80vh]">
        <Sidebar notify={notify}/>
        <RightMap />
      </div>
      <ProfileSection />
    </div>
  );
};

export default Map;
