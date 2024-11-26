import { BsJustifyLeft, BsXLg, BsInstagram, BsTwitterX, BsLinkedin, BsEnvelope } from "react-icons/bs";
import { useState, useEffect } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Detect scroll to change background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Header Container */}
      <div
        className={`sticky top-0 z-30 transition-all duration-300 ${
          scrolled ? "bg-white shadow-sm" : "bg-slate-100"
        }`}
      >
        {/* Mobile Menu Button */}
        <div
          className="flex p-4 md:hidden text-4xl border-b border-slate-100"
          onClick={toggleMenu}
        >
          {menuOpen ? <BsXLg /> : <BsJustifyLeft />}
        </div>

        {/* Mobile Menu with Transition */}
        <div
          className={`flex flex-col z-20 md:hidden absolute w-full bg-white transition-all duration-500 overflow-hidden ${
            menuOpen ? "max-h-96 py-10" : "max-h-0 py-0"
          }`}
        >
          <div className="flex flex-col space-y-3 items-center">
          <a href="https://www.linkedin.com/in/okunola-oluwawemi-477171222?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="flex flex-row space-x-1">
              <small>LinkedIn </small>
              <BsLinkedin/>
            </a>
            <a href="https://www.instagram.com/ogwemmy" className="flex flex-row space-x-1">
              <small>Instagram </small>
              <BsInstagram />
            </a>
            <a href="https://x.com/wemithewild" className="flex flex-row space-x-1">
              <small>Twitter </small>
              <BsTwitterX />
            </a>
            <a href="mailto:okunolawemzy@gmail.com"  className="flex flex-row space-x-1">
              <small className="text-black">okunolawemzy@gmail.com</small>
              <BsEnvelope />
            </a>
            <button className="bg-black rounded-2xl text-white px-8 py-1">
              CV
            </button>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex md:flex-row justify-between p-8">
          <div className="flex flex-row space-x-3 items-center">
          <a href="mailto:okunolawemzy@gmail.com" className="flex flex-row space-x-2">
              <small className="text-black">okunolawemzy@gmail.com</small>
              <BsEnvelope />
            </a>
            <button className="bg-black rounded-2xl text-white px-8 py-1">
              CV
            </button>
          </div>

          <div className="flex flex-row space-x-3 items-center">
            <a href="https://www.linkedin.com/in/okunola-oluwawemi-477171222?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="flex flex-row space-x-1">
              <small>LinkedIn </small>
              <BsLinkedin/>
            </a>
            <a href="https://www.instagram.com/ogwemmy" className="flex flex-row space-x-1">
              <small>Instagram </small>
              <BsInstagram />
            </a>
            <a href="https://x.com/wemithewild" className="flex flex-row space-x-1">
              <small>Twitter </small>
              <BsTwitterX />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
