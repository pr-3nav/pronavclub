import { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

function Navbar() {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <nav className="fixed w-full flex items-center justify-between text-white px-6 py-4 bg-gray-800 shadow-md z-50 ">
      {/* Logo */}
      <div className="text-2xl font-bold ">
        <a href="#hero" className='tracking-wide text-3xl gradient-text font-serif'>P.CLUB</a>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-6 text-lg font-medium">
        <li><a href="#about" className="hover:text-blue-500">About</a></li>
        <li><a href="#skills" className="hover:text-blue-500">Skills</a></li>
        <li><a href="#projects" className="hover:text-blue-500">Projects</a></li>
        <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
      </ul>

      {/* Hamburger Icon (visible only on mobile) */}
      <div className="md:hidden">
        <AiOutlineMenu size={30} onClick={toggleNav} />
      </div>

      {/* Mobile Menu (overlay) */}
      <div
        className={`fixed top-0 right-0 w-full h-full bg-black bg-opacity-90 transform ${
          navOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="flex justify-end p-4">
          <AiOutlineClose size={30} className="text-white" onClick={toggleNav} />
        </div>
        <ul className="flex flex-col items-center justify-center space-y-8 h-full text-white text-2xl">
          <li><a href="#hero" className="hover:text-blue-500" onClick={toggleNav}>Home</a></li>
          <li><a href="#about" className="hover:text-blue-500" onClick={toggleNav}>About</a></li>
          <li><a href="#skills" className="hover:text-blue-500" onClick={toggleNav}>Skills</a></li>
          <li><a href="#projects" className="hover:text-blue-500" onClick={toggleNav}>Projects</a></li>
          <li><a href="#contact" className="hover:text-blue-500" onClick={toggleNav}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
