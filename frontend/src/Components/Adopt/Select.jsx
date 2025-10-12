import { IoIosArrowDropdown } from "react-icons/io";

const Select = ({notify}) => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col items-center justify-center text-center mt-20 mb-10 px-4">
        <h1 className="font-bold text-4xl">Find Your Friend</h1>
        <p className="text-lg text-gray-700 pt-2">
          You can find them by your current location, city, country, or state.
        </p>
      </div>

      <div className="flex flex-col md:flex-row w-[90%] md:w-[80%] mx-auto justify-between items-center gap-4">
        {/* Left Section */}
        <div className="flex flex-col md:flex-row w-full md:w-auto gap-2 md:gap-2 items-center">
          <input
            className="border px-6 py-3 rounded-full border-yellow-500 w-full md:w-auto"
            type="text"
            placeholder="Search By Animal Name"
          />
          <button onClick={notify} className="bg-yellow-400 cursor-pointer text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-500 transition w-full md:w-auto">
            Search
          </button>
        </div>

        {/* Right Section */}
        <div className="flex flex-col md:flex-row gap-2 md:gap-2 w-full md:w-auto items-center">
          <button onClick={notify} className="bg-yellow-400 cursor-pointer text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-500 transition w-full md:w-auto">
            Current Location
          </button>

          {/* State Select */}
          <div className="relative inline-block w-full md:w-auto">
            <select
              name="state"
              id="state"
              className="border px-6 py-3 rounded-full border-yellow-500 pr-10 appearance-none w-full md:w-auto"
            >
              <option value="Rajasthan">Rajasthan</option>
              <option value="Uttar Pradesh">Uttar Pradesh</option>
              <option value="Madhya Pradesh">Madhya Pradesh</option>
              <option value="Delhi">Delhi</option>
              <option value="Haryana">Haryana</option>
              <option value="Punjab">Punjab</option>
              <option value="Gujarat">Gujarat</option>
            </select>
            <span className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
              <IoIosArrowDropdown />
            </span>
          </div>

          {/* City Select */}
          <div className="relative inline-block w-full md:w-auto">
            <select
              name="city"
              id="city"
              className="border px-6 py-3 rounded-full border-yellow-500 pr-10 appearance-none w-full md:w-auto"
            >
              <option value="Dholpur">Dholpur</option>
              <option value="Agra">Agra</option>
              <option value="Bharatpur">Bharatpur</option>
              <option value="Mathura">Mathura</option>
              <option value="Gwalior">Gwalior</option>
              <option value="Jaipur">Jaipur</option>
              <option value="Alwar">Alwar</option>
            </select>
            <span className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
              <IoIosArrowDropdown />
            </span>
          </div>

          {/* Country Select */}
          <div className="relative inline-block w-full md:w-auto">
            <select
              name="country"
              id="country"
              className="border px-6 py-3 rounded-full border-yellow-500 pr-10 appearance-none w-full md:w-auto"
            >
              <option value="India">India</option>
              <option value="USA">USA</option>
              <option value="UK">UK</option>
            </select>
            <span className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
              <IoIosArrowDropdown />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Select;
