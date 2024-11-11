import { BsJustifyLeft, BsXLg } from "react-icons/bs";
import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <div
        className="flex p-4 md:hidden text-4xl bg-slate-100 border border-b-slate-100"
        onClick={toggleMenu}
      >
        {menuOpen ? <BsXLg /> : <BsJustifyLeft />}
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="flex flex-col z-20 md:hidden absolute w-full h-[40%]">
          <div className="bg-white flex flex-col space-y-3 items-center py-4">
            <small>LinkedIn</small>
            <small>Instagram</small>
            <small>Twitter</small>
            <a href="mailto:okunolawemzy@gmail.com">
              <small className="text-black">okunolawemzy@gmail.com</small>
            </a>
            <button className="bg-black rounded-2xl text-white px-8 py-1">
              CV
            </button>
          </div>
        </div>
      )}

      {/* Desktop Menu */}
      <div className="hidden md:flex md:flex-row justify-between bg-slate-100 p-8">
        <div className="flex flex-row space-x-3 items-center">
          <a href="mailto:okunolawemzy@gmail.com">
            <small className="text-black">okunolawemzy@gmail.com</small>
          </a>
          <button className="bg-white rounded-2xl text-black px-8 py-1">CV</button>
        </div>

        <div className="flex flex-row space-x-3 items-center">
          <small>LinkedIn</small>
          <small>Instagram</small>
          <small>Twitter</small>
        </div>
      </div>
    </>
  );
};

export default Header;
