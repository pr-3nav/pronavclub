// const Hero = () => {
//     return (
//       <section id="home" className="h-screen flex flex-col justify-center items-center bg-slate-300 text-white">
//         <img src="https://images.unsplash.com/photo-1587837073080-448bc6a2329b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fG1vZGVsJTIwaW1hZ2VzfGVufDB8fDB8fHww" alt="Your Name" className="rounded-full w-52 h-52 mb-6 shadow-lg"/>
//         <h1 className="text-6xl font-bold mb-4 gradient-text">Hi, I'm Pronav Rongphar</h1>
//         <p className="text-xl mb-4 gradient-text">A passionate web developer with a focus on creating amazing digital experiences.</p>
//         <a href="#projects" className="mt-4 px-6 py-2 bg-white text-blue-600 rounded-full hover:bg-blue-200 transition duration-300 shadow-lg">See My Work</a>
//       </section>
//     );
//   };

//   export default Hero;




// const Hero = () => {
//   return (
//     <section id="hero" className="h-screen flex items-center bg-gradient-to-r from-gray-900 to-gray-800 text-white">
//       <div className="container mx-auto px-4 text-center">
//         <h1 className="text-8xl md:text-7xl  font-bold mb-9 gradient-text tracking-tight font-Lora">Welcome to PronavClub</h1>
//         <p className="text-xl md:text-xl mb-8"> Hi!, I'm Pronav, a passionate developer.</p>
//         <a href="#contact" className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">Get in Touch</a>
//       </div>
//     </section>
//   );
// };

// export default Hero;



// Hero.jsx

const Hero = () => {
  return (
    <section id="hero" className="bg-gray-900 text-white h-screen flex items-center justify-center">
      <div className="text-center">
        {/* Responsive Heading with Tailwind Default Font */}
        <h1 className="text-7xl md:text-7xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text mb-8 font-popins">
          Welcome to PronavClub
        </h1>
        <p className="text-lg md:text-xl  mb-9 ">
          I am Pronav, a passionate developer.
        </p>
        <a href="#contact" className="bg-blue-500 text-white py-2 px-5 rounded-lg hover:bg-blue-600">Get in Touch</a>
      </div>
    </section>
  );
};

export default Hero;
