import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"; // or logo.svg

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showArrow, setShowArrow] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // ✅ Detect screen width changes
  useEffect(() => {
    const handleResize = () => {
      setShowArrow(window.innerWidth < 1280); // show arrow if smaller than 1280px
    };
    handleResize(); // run once at start
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Indice", path: "/indice" },
    { name: "Storia", path: "/storia" },
    { name: "Leggi", path: "/leggi" },
    { name: "Araldica", path: "/araldica" },
    { name: "Nobiltà", path: "/nobiltà" },
    { name: "Esteri", path: "/esteri" },
    { name: "Genealogia", path: "/genealogia" },
    { name: "Ordini Cavallereschi", path: "/ordini-cavallereschi" },
  ];

  return (
    <nav className="bg-royalblue text-royalgold font-body shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-3 flex items-center justify-between">
        {/* 🔹 Logo + Title */}
        <Link to="/" className="flex items-center space-x-3 group">
          <img
            src={logo}
            alt="Royal Protocol"
            className="h-10 w-auto md:h-12 object-contain opacity-95 
                       group-hover:opacity-100 transition-all duration-300 
                       drop-shadow-[0_4px_8px_rgba(11,29,58,0.3)]"
          />
          <span className="text-xl md:text-2xl font-title tracking-wide group-hover:text-royalred transition-colors duration-300">
            ROYAL PROTOCOL
          </span>
        </Link>

        {/* 🔹 Menu + Dropdown Arrow */}
        <div className="flex items-center space-x-4">
          {/* Dropdown arrow visible only below 1280px */}
          {showArrow && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className={`w-6 h-6 transform transition-transform duration-300 ${
                isOpen ? "rotate-180" : "rotate-0"
              } cursor-pointer`}
              onClick={toggleMenu}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          )}

          {/* Hamburger button (mobile fallback) */}
          <button
            onClick={toggleMenu}
            className="xl:hidden text-royalgold focus:outline-none focus:ring-2 focus:ring-royalred rounded"
            aria-label="Menu"
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-7 h-7"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-7 h-7"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>

          {/* Desktop navigation (visible >=1280px) */}
          <ul className="hidden xl:flex space-x-6">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className="hover:text-royalred transition-colors duration-300 font-medium"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* 🔹 Dropdown menu (for smaller than 1280px) */}
      {isOpen && (
        <div className="xl:hidden bg-[#0b1d3a]/95 text-royalgold border-t border-royalgold/30">
          <ul className="flex flex-col space-y-2 px-6 py-4">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className="block py-2 hover:text-royalred transition-colors duration-300"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
