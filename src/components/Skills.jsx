import { FaPython, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiMongodb } from 'react-icons/si';
import { DiJava } from "react-icons/di";
import { DiNodejs } from "react-icons/di";


const skills = [
  { name: 'Python', icon: <FaPython size={40} className='text-yellow-600' />, level: 'Intermediate' },
  { name: 'React', icon: <FaReact size={40}  className="text-blue-600" />, level: 'Advance' },
  { name: 'Javascript', icon: <FaNodeJs size={40} className='text-green-600'/>, level: 'Advance' },
  { name: 'Mongoose', icon: <SiMongodb size={40} className='text-green-700'/>, level: 'Avdance' },
  { name: 'Nodejs', icon: <DiNodejs size={40} className='text-green-700'/>, level: 'Advance' },
  { name: 'Java', icon: <DiJava size={40} className='text-red-700'/>, level: 'Intermediate' },

];

const Skills = () => {
  return (
    <section id="skills" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">My Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
              <div className="mb-4">{skill.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
              <p className="text-gray-700">Level: {skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
