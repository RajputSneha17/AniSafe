import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [scroll, setScroll] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const scrollHandler = () => {
      if (window.scrollY > 50) setScroll(true);
      else setScroll(false);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full px-6 py-4 flex justify-between items-center z-50 transition-colors duration-300 ${
        scroll ? "bg-black/50 backdrop-blur-md shadow-lg text-yellow-500" : "bg-black/0 text-white"
      }`}
    >
      <h1 className="text-2xl font-bold">
        <Link to="/">AniSafe</Link>
      </h1>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-8 items-center font-medium">
        <Link to="/community" className="hover:text-yellow-400 transition">
          Community
        </Link>
        <Link to="/adopt" className="hover:text-yellow-400 transition">
          Adopt
        </Link>
        <Link to="/map" className="hover:text-yellow-400 transition">
          Map
        </Link>
        <Link
          to="/emergency"
          className="hover:text-yellow-400 bg-red-600 text-white px-3 py-1 rounded-full hover:bg-red-700 transition"
        >
          Emergency
        </Link>
        <Link to="/register" className="hover:text-yellow-400 transition">
          Login
        </Link>
        <button
          className={`border px-4 py-1 rounded-full transition ${
            scroll
              ? "hover:bg-yellow-500 hover:text-white border-black"
              : "hover:bg-white hover:text-black border-white"
          }`}
        >
          <Link to="/register">Sign up</Link>
        </button>
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden flex flex-col cursor-pointer z-50" onClick={() => setMenuOpen(!menuOpen)}>
        <div className={`w-7 h-0.5 bg-white mb-1 transition-transform ${menuOpen ? "rotate-45 translate-y-2" : ""}`}></div>
        <div className={`w-7 h-0.5 bg-white mb-1 transition-opacity ${menuOpen ? "opacity-0" : "opacity-100"}`}></div>
        <div className={`w-7 h-0.5 bg-white transition-transform ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}></div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-yellow-500 text-white flex flex-col items-center justify-center space-y-6 md:hidden transition-all duration-300 z-40">
          <Link to="/community" onClick={() => setMenuOpen(false)} className="text-2xl hover:text-white/80 transition">
            Community
          </Link>
          <Link to="/adopt" onClick={() => setMenuOpen(false)} className="text-2xl hover:text-white/80 transition">
            Adopt
          </Link>
          <Link to="/map" onClick={() => setMenuOpen(false)} className="text-2xl hover:text-white/80 transition">
            Map
          </Link>
          <Link
            to="/emergency"
            onClick={() => setMenuOpen(false)}
            className="text-2xl bg-red-600 px-4 py-2 rounded-full hover:bg-red-700 transition"
          >
            Emergency
          </Link>
          <Link to="/register" onClick={() => setMenuOpen(false)} className="text-2xl hover:text-white/80 transition">
            Login
          </Link>
          <button
            className="border px-6 py-2 rounded-full hover:bg-white hover:text-yellow-500 transition text-lg"
            onClick={() => setMenuOpen(false)}
          >
            <Link to="/register">Sign up</Link>
          </button>
        </div>
      )}
    </nav>
  );
};

export default Nav;
