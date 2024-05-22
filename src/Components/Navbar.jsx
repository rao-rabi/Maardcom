import { useState } from "react";
import { logo } from "./Images";
const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    {
      name: "New Car",
    },
    {
      name: "Used Car",
    },
    {
      name: "Sell Your Car",
    },
    {
      name: "Buy Car",
    },
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="p-2">
      <nav className="flex items-center">
        {/* logo */}
        <div className="md:mr-4 mr-0">
          <img src={logo} alt="Logo" />
        </div>
        <div className="md:hidden ml-auto">
          <button
            className="text-white focus:outline-none"
            onClick={toggleMobileMenu}
          >
            {/* when modal close */}
            {mobileMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>

          {/* when modal open */}
          {mobileMenuOpen && (
            <ul className="absolute right-5 mt-3 z-10 border rounded-md bg-[#1C1C28] shadow-md w-72">
              {navItems.map((item) => (
                <li key={item.name}>
                  <button
                    className="block w-full py-2 text-white px-4 text-md text-left font-bold border-b "
                    onClick={() => {
                      setMobileMenuOpen(false);
                    }}
                  >
                    {item.name}
                  </button>
                </li>
              ))}
              <li>
                <div className="my-2 flex justify-between items-center pr-6">
                  <button type="button" className="text-white border-0 mx-5">
                    Sign In
                  </button>
                  <button
                    type="button"
                    className="text-white bg-[#880ED3] rounded-lg px-3 py-1"
                  >
                    Sign Up
                  </button>
                </div>
              </li>
            </ul>
          )}
        </div>
        <div className="hidden md:flex">
          <ul className="flex space-x-4">
            {navItems.map((item) => (
              <li key={item.name}>
                <button className="inline-block text-white py-2 px-3 text-base">
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="ml-auto hidden md:flex">
          <button type="button" className="text-white border-0 mx-5">
            Sign In
          </button>
          <button
            type="button"
            className="text-white bg-[#880ED3] rounded-lg px-3 py-1"
          >
            Sign Up
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
