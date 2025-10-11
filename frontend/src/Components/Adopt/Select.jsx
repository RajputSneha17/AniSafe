import { IoIosArrowDropdown } from "react-icons/io";
const Select = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col items-center justify-center text-center mt-20 mb-10 ">
        <h1 className="font-bold text-4xl ">Find Your Friend</h1>
        <p className="text-lg text-gray-700 pt-2">
          You can find them by your current location, city, country, or state.
        </p>
      </div>
      <div className="flex row w-[80%] mx-auto justify-between m-4 items-center">
        <div className="col-6">
          <input
            className="border px-6 py-3 rounded-full border-yellow-500"
            type="text"
            placeholder="Search By Animal Name"
          />
          <button className="bg-yellow-400 m-1 cursor-pointer text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-500 transition">
            Search
          </button>
        </div>
        <div className="col">
          <button className="bg-yellow-400 cursor-pointer m-1 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-500 transition">
            Current Location
          </button>
          <div className="relative inline-block">
            <select
              name="state"
              id="state"
              className="border px-6 py-3 rounded-full border-yellow-500 pr-10 appearance-none"
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
          <div className="relative inline-block">
            <select
              name="city"
              id="city"
              className="border px-6 py-3 rounded-full border-yellow-500 pr-10 appearance-none"
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
          <div className="relative inline-block">
            <select
              name="country"
              id="country"
              className="border px-6 py-3 rounded-full border-yellow-500 pr-10 appearance-none"
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
