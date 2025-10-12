import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

const Register = () => {
  const [isSignup, setIsSignup] = useState(false);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    toast("Login feature is not implemented yet!");
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    toast("Signup feature is not implemented yet!");
  };

  return (
    <div className="min-h-screen w-full flex justify-center items-center bg-gradient-to-br from-yellow-300 to-yellow-500 font-sans px-4 py-10">
      <ToastContainer/>
      <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
        
        {/* Left Panel - Forms */}
        <div className="w-full md:w-1/2 relative flex flex-col justify-center items-center p-8 h-auto md:h-[500px]">
          
          {/* Toggle buttons for small screens */}
          <div className="flex mb-6 space-x-4 block md:hidden">
            <button
              onClick={() => setIsSignup(false)}
              className={`px-4 py-2 rounded-full font-semibold transition ${
                !isSignup
                  ? "bg-yellow-500 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              Login
            </button>
            <button
              onClick={() => setIsSignup(true)}
              className={`px-4 py-2 rounded-full font-semibold transition ${
                isSignup
                  ? "bg-yellow-500 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              Sign Up
            </button>
          </div>

          {/* Login Form */}
          <form
            onSubmit={handleLoginSubmit}
            className={`w-full flex flex-col justify-center items-center transition-all duration-700
              ${isSignup ? "hidden md:flex absolute inset-0 opacity-0 translate-x-10 pointer-events-none" : "flex"}
            `}
          >
            <h2 className="text-3xl font-bold mb-8 text-yellow-600 text-center">
              Login
            </h2>
            <input
              type="email"
              placeholder="Email"
              required
              className="mb-6 w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <input
              type="password"
              placeholder="Password"
              required
              className="mb-8 w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <button
              type="submit"
              className="bg-yellow-500 text-white w-full py-3 rounded-full font-semibold hover:bg-yellow-600 active:scale-95 transition"
            >
              Login
            </button>
          </form>

          {/* Sign Up Form */}
          <form
            onSubmit={handleSignupSubmit}
            className={`w-full flex flex-col justify-center items-center transition-all duration-700
              ${!isSignup ? "hidden md:flex absolute inset-0 opacity-0 -translate-x-10 pointer-events-none" : "flex"}
            `}
          >
            <h2 className="text-3xl font-bold mb-8 text-yellow-600 text-center">
              Sign Up
            </h2>
            <input
              type="text"
              placeholder="Full Name"
              required
              className="mb-6 w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <input
              type="email"
              placeholder="Email"
              required
              className="mb-6 w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <input
              type="password"
              placeholder="Password"
              required
              className="mb-8 w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <button
              type="submit"
              className="bg-yellow-500 text-white w-full py-3 rounded-full font-semibold hover:bg-yellow-600 active:scale-95 transition"
            >
              Sign Up
            </button>
          </form>

        </div>

        {/* Right Panel */}
        <div className="w-full md:w-1/2 bg-yellow-500 text-white p-8 flex flex-col justify-center items-center h-auto md:h-[500px] mt-8 md:mt-0 hidden md:flex">
          {!isSignup ? (
            <>
              <h2 className="text-3xl font-bold mb-4 text-center">New Here?</h2>
              <p className="text-center mb-6">
                Sign up and join our amazing community today!
              </p>
              <button
                onClick={() => setIsSignup(true)}
                className="bg-white text-yellow-600 px-8 py-2 rounded-full font-semibold hover:bg-yellow-100 active:scale-95 transition"
              >
                Sign Up
              </button>
            </>
          ) : (
            <>
              <h2 className="text-3xl font-bold mb-4 text-center">Welcome Back!</h2>
              <p className="text-center mb-6">
                Already have an account? Login now and continue your journey!
              </p>
              <button
                onClick={() => setIsSignup(false)}
                className="bg-white text-yellow-600 px-8 py-2 rounded-full font-semibold hover:bg-yellow-100 active:scale-95 transition"
              >
                Login
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Register;
