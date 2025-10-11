const LandingPage = () => {
  return (
    <div
      className="relative h-screen w-full bg-cover bg-center font-sans"
      style={{
        backgroundImage: "url('/adopt-dogimg.jpeg')", 
      }}
    >

      {/* Hero Section */}
      <div className="relative z-10 flex items-center h-full px-6 md:px-20">
        <div className="max-w-xl text-white space-y-6">
          <h3 className="text-md font-semibold tracking-tighter uppercase">
            Protect & Rescue Animals
          </h3>

          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight">
            Save lives, adopt pets <br /> and make a difference
          </h1>

          <p className="text-sm md:text-base opacity-90">
            Join our mission to protect animals and provide safe homes. Explore initiatives, rescue zones, and ways you can help.
          </p>

          <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-full transition">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
