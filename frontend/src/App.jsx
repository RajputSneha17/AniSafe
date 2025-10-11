import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
// import {
//   SignedIn,
//   SignedOut,
//   SignInButton,
//   UserButton,
// } from "@clerk/clerk-react";
// import { BrowserRouter, Route, Router } from "react-router-dom";
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

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav/>
        <Routes>
          {/* All pages */}
          <Route path="/" element={<Home />} />
          <Route path="/adopt" element={<Adopt />} />
          <Route path="/community" element={<Community />} />
          <Route path="/emergency" element={<Emergency />} />
          <Route path="/map" element={<Map /> } />
          <Route path="/profile" element={<Profile /> } />

          {/* Make Profile */}
          <Route path="/register" element={<Register /> } />
          <Route path="/makeprofile" element={<MakeProfile /> } />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;