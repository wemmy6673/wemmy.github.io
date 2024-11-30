import Wemi from '../images/wemi.jpeg';
import { BsGithub } from "react-icons/bs";
import "animate.css/animate.compat.css"
import ScrollAnimation from 'react-animate-on-scroll';
import { TypeAnimation } from 'react-type-animation';



const Hero = () => {
  return (
    <div
      className="bg-slate-100 p-16 w-full flex flex-col space-y-6 justify-center items-center relative"
      style={{ borderBottomLeftRadius: '25%', borderBottomRightRadius: '25%' }}
    >
  
        <img
          src={Wemi}
          alt="Wemi"
          className="rounded-full w-56 h-56 object-cover border-4 border-white"
        />
        <TypeAnimation className="text-xs md:text-lg"
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Hi there! Wemmy Here.',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'I am front-end dev.',
        1000,
        
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '1.5em', display: 'inline-block' }}
      repeat={Infinity}
    />
  
        
      
      <a href='https://github.com/wemmy6673'><button className="bg-black text-white items-center hover:bg-white hover:text-black rounded-full p-3 flex flex-row space-x-1 transition duration-300 ease-in-out"><p>Go to Github</p> <BsGithub /></button></a>
    </div>
  );
};

export default Hero;
