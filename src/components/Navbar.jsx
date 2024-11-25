
// const Navbar = () => {
//   return (
//     <nav className="bg-gray-800 text-white p-4 fixed w-full top-0 left-0 shadow-lg">
//       <div className="container mx-auto flex justify-between items-center">
//         <a href="#hero" className="text-2xl font-bold gradient-text tracking-widest">P.CLUB</a>
//         <ul className="flex space-x-4 ">
//           <li><a href="#hero" className="hover:text-blue-500">Home</a></li>
//           <li><a href="#about" className="hover:text-blue-500">About</a></li>
//           <li><a href="#skills" className="hover:text-blue-500">Skills</a></li>
//           <li><a href="#projects" className="hover:text-blue-500">Projects</a></li>
//           <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



// Navbar.jsx


// Navbar.jsx

// import  { useState } from "react";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav className="bg-gray-800 p-4">
//       <div className="container mx-auto flex justify-between items-center">
//         {/* Logo on the left */}
//         <h1 className="text-white text-lg">My Portfolio</h1>

//         {/* Hamburger Icon for Mobile */}
//         <button
//           className="text-white md:hidden"
//           onClick={toggleMenu}
//         >
//           {/* Hamburger Icon */}
//           <svg
//             className="w-6 h-6"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M4 6h16M4 12h16m-7 6h7"
//             ></path>
//           </svg>
//         </button>

//         {/* Navigation Menu on the right */}
//         <ul
//           className={`${
//             isOpen ? "block" : "hidden"
//           } md:flex md:space-x-6 md:space-y-9  md:items-center`}
//         >
//           <li className="text-white py-2 md:py-0">
//             <a href="#home">Home</a>
//           </li>
//           <li className="text-white py-2 md:py-0">
//             <a href="#about">About</a>
//           </li>
//           <li className="text-white py-2 md:py-0">
//             <a href="#projects">Projects</a>
//           </li>
//           <li className="text-white py-2 md:py-0">
//             <a href="#contact">Contact</a>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



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
        <a href="#hero" className='tracking-wide text-3xl gradient-text'>P.CLUB</a>
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
