
const Hero = () => {
  return (
    <section id="hero" className="bg-gray-900 text-white h-screen w-full flex items-center justify-center">
      <div className="text-center">
        {/* Responsive Heading with Tailwind Default Font */}
        <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text mb-8 font-serif">
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
