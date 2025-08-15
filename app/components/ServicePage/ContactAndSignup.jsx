"use client";
import { FaPhoneAlt } from "react-icons/fa";

const ContactAndSignup = () => {
  return (
    <section className="py-12 px-4 md:px-10 bg-gray-100">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 fade-up">
        
        {/* Find Transport Service */}
        <div className="bg-white shadow-md rounded-lg p-6 flex items-center space-x-4">
          <div className="bg-red-600 text-white p-3 rounded-full">
            <FaPhoneAlt size={20} />
          </div>
          <div>
            <h3 className="text-lg font-semibold">Find Transport Service</h3>
            <p className="text-sm text-gray-500">Call Us Free</p>
            <p className="text-base font-bold">+888 325 6988 4584</p>
          </div>
        </div>

        {/* Sign Up for Email */}
        <div className="bg-black shadow-md rounded-lg p-6 flex flex-col sm:flex-row items-center sm:items-stretch space-y-4 sm:space-y-0 sm:space-x-4">
          <h3 className="text-lg font-semibold text-white flex-shrink-0">
            Sign Up for Email
          </h3>
          <div className="flex w-full">
            <input
              type="email"
              placeholder="Email Address"
              className="px-4 py-2 rounded-l-md w-full outline-none text-gray-800"
            />
            <button className="bg-yellow-500 text-black font-semibold px-4 py-2 rounded-r-md hover:bg-yellow-600 transition-colors duration-300">
              SUBMIT NOW
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactAndSignup;
