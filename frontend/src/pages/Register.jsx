import React, { useState } from "react";

const Register = () => {
  const [isSignup, setIsSignup] = useState(false);

  return (
    <div className="h-screen w-full flex justify-center items-center bg-gradient-to-br from-yellow-300 to-yellow-500 font-sans px-4">
      <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden flex h-[500px]">
        {/* Left Panel - Forms */}
        <div className="w-1/2 relative flex flex-col justify-center items-center p-8">
          {/* Login Form */}
          <div
            className={`absolute inset-0 flex flex-col justify-center items-center px-6 transition-all duration-700 ${
              isSignup
                ? "opacity-0 -translate-x-10 pointer-events-none"
                : "opacity-100 translate-x-0 pointer-events-auto"
            }`}
          >
            <h2 className="text-3xl font-bold mb-8 text-yellow-600">Login</h2>
            <input
              type="email"
              placeholder="Email"
              className="mb-6 w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <input
              type="password"
              placeholder="Password"
              className="mb-8 w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <button className="bg-yellow-500 text-white w-full py-3 rounded-full font-semibold hover:bg-yellow-600 active:scale-95 transition">
              Login
            </button>
          </div>

          {/* Sign Up Form */}
          <div
            className={`absolute inset-0 flex flex-col justify-center items-center px-6 transition-all duration-700 ${
              isSignup
                ? "opacity-100 translate-x-0 pointer-events-auto"
                : "opacity-0 translate-x-10 pointer-events-none"
            }`}
          >
            <h2 className="text-3xl font-bold mb-8 text-yellow-600">Sign Up</h2>
            <input
              type="text"
              placeholder="Full Name"
              className="mb-6 w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <input
              type="email"
              placeholder="Email"
              className="mb-6 w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <input
              type="password"
              placeholder="Password"
              className="mb-8 w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <button className="bg-yellow-500 text-white w-full py-3 rounded-full font-semibold hover:bg-yellow-600 active:scale-95 transition">
              Sign Up
            </button>
          </div>
        </div>

        {/* Right Panel - Overlay / Animation */}
        <div className="w-1/2 bg-yellow-500 text-white p-8 flex flex-col justify-center items-center h-[500px]">
          {!isSignup ? (
            <>
              <h2 className="text-3xl font-bold mb-4">New Here?</h2>
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
              <h2 className="text-3xl font-bold mb-4">Welcome Back!</h2>
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
