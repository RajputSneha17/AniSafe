import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  const [scroll, setSCroll] = useState(false);

  useEffect(() => {
    const scrollHandler = () => {
      if(window.scrollY > 300) {
        setSCroll(true);
      }else{
        setSCroll(false);
      }
    }
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  })
  return (
    <div>
      {/* Navbar */}
      <nav className={`fixed top-0 left-0 w-full px-6 py-4 flex justify-between items-center text-white z-20 ${scroll ? "bg--black/50 backdrop-blur-md shadow-lg text-yellow-500" : "bg-black/0"}`} >
        <h1 className="text-2xl font-bold">
          <Link to="/">AniSafe</Link>
        </h1>

        <div className="hidden md:flex space-x-8 items-center font-medium">
          <Link to="/community" className="hover:text-yellow-400">
            Community
          </Link>
          <Link to="/adopt" className="hover:text-yellow-400">
            Adopt
          </Link>
          <Link to="/map" className="hover:text-yellow-400">
            Map
          </Link>
          <Link
            to="/emergency"
            className="hover:text-yellow-400 bg-red-600 text-white px-3 py-1 rounded-full hover:bg-red-700 transition"
          >
            Emergency
          </Link>
          <Link to="/login" className="hover:text-yellow-400">
            Login
          </Link>
          <button className={`border px-4 py-1 rounded-full ${scroll ? "hover:bg-yellow-500 hover:text-white border-black" : "hover:bg-white hover:text-black border-white"} transition `}>
            Sign up
          </button>
        </div>

        {/* Hamburger */}
        <div className="md:hidden flex flex-col cursor-pointer">
          <div className="w-7 h-0.5 bg-white mb-1"></div>
          <div className="w-7 h-0.5 bg-white mb-1"></div>
          <div className="w-7 h-0.5 bg-white"></div>
        </div>
      </nav>
    </div>
  )
}

export default Nav
