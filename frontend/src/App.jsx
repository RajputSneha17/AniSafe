import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Adopt from "./pages/Adopt";
import Community from "./pages/Community";
import Emergency from "./pages/Emergency";
import Map from "./pages/Map";
import Nav from "./Layout/Nav";
import Footer from "./Layout/Footer";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import MakeProfile from "./pages/MakeProfile";
import Ai from "./Layout/Ai";
import { MessageCircle } from "lucide-react"; 

function App() {
  return (
    <>
<BrowserRouter>
  <div className="relative">
    <Nav />

    <Routes>
      {/* All pages */}
      <Route path="/" element={<Home />} />
      <Route path="/adopt" element={<Adopt />} />
      <Route path="/community" element={<Community />} />
      <Route path="/emergency" element={<Emergency />} />
      <Route path="/map" element={<Map />} />
      <Route path="/profile" element={<Profile />} />

      {/* Make Profile */}
      <Route path="/register" element={<Register />} />
      <Route path="/makeprofile" element={<MakeProfile />} />

      {/* AI Chat */}
      <Route path="/ai" element={<Ai />} />
    </Routes>

    <Footer />

    {/* Floating Chatbot Icon */}
    <Link
      to="/ai"
      className="fixed bottom-6 right-6 z-50 bg-yellow-400 hover:bg-yellow-500 text-black rounded-full p-4 shadow-lg transition-all duration-300 flex items-center justify-center"
      title="AI Chatbot"
    >
      <MessageCircle size={28} />
    </Link>
  </div>
</BrowserRouter>

    </>
  );
}

export default App;
