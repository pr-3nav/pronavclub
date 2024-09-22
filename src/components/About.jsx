// // About.jsx

// const About = () => {
//     return (
//         <section id="about" className="bg-gray-100 py-12 px-6 md:px-12">
//             <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
//                 {/* Image on the Right */}
//                 <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
//                     <img
//                         src="https://images.unsplash.com/photo-1601412436967-8b2d90944ded?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MzF8fHxlbnwwfHx8fHw%3D" // Replace this with the actual path to your image
//                         alt="Pronav Rongphar"
//                         className="rounded-lg w-72 h-72 md:w-[370px] md:h-[400px] object-cover"
//                     />
//                 </div>
//                 {/* Text Content on the Left */}
//                 <div className="md:w-1/2 md:pr-8">
//                     <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">About Me</h2>
//                     <p className="text-lg md:text-xl">
//                         Hi, I'm <span className="gradient-text">Pronav Rongphar</span>, a self-taught web developer with a passion for building efficient, user-friendly applications. Although I took a different path by leaving college, my determination to learn and grow in the tech world has only strengthened. I have experience in Python, React, Node.js, and Mongoose, and I’m always eager to expand my knowledge and skills.

//                         In addition to coding, I'm a huge fan of football and cricket, which have taught me the value of teamwork, strategy, and perseverance—qualities I bring into my development work.

//                         As a new developer, this portfolio represents my first step into the professional world. I’m excited to collaborate on new projects, apply my skills, and continue evolving as a developer. I believe that with the right mindset and dedication, anything is possible.

//                         Let’s create something great together!
//                     </p>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default About;








import pronav from "../assets/king.jpeg"

const About = () => {
  return (
    <section id="about" className="flex flex-col md:flex-row items-center md:items-start justify-center py-12 px-6 bg-gray-100">
      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
        <img 
          src={pronav} 
          alt="Pronav Rongphar" 
          className="w-80 h-auto rounded-lg shadow-lg" 
        />
      </div>
      {/* Text Section */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h2 className="text-3xl font-bold mb-4 text-gray-800 text-center">About Me</h2>
        <p className="text-lg text-gray-700 mb-4">
          Hi, I&apos;m <strong className="gradient-text">Pronav Rongphar</strong>, a self-taught web developer with a passion for building efficient, user-friendly applications. Although I took a different path from my academics, my determination to learn and grow in the tech world has only strengthened. I have experience in <strong>Python</strong>, <strong>React</strong>, <strong>Node.js</strong>, <strong>Mongoose</strong> and more, and I&apos;m always eager to expand my knowledge and skills.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          In addition to coding, I&apos;m a huge fan of <strong>football</strong> and <strong>cricket</strong>, which have taught me the value of teamwork, strategy, and perseverance—qualities I bring into my development work.
        </p>
        <p className="text-lg text-gray-700">
          As a <strong>new developer</strong>, this portfolio represents my first step into the professional world. I’m excited to collaborate on new projects, apply my skills, and continue evolving as a developer. I believe that with the right mindset and dedication, anything is possible.
        </p>
        <p className="text-lg text-gray-700 mt-4">
          <strong>Let’s create something great together!</strong>
        </p>
      </div>
    </section>
  );
};

export default About;
