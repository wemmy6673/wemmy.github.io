import Wemi from '../images/wemi.jpeg';
import { BsGithub } from "react-icons/bs";


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
        <div className="w-full text-center">
          <p className='text-lg md:text-3xl font-semibold'>Hi there! Wemmy Here</p>
          <p className='text-lg md:text-3xl font-semibold'>I am a front end developer</p>
          <p className='text-lg md:text-3xl font-semibold'>I build user friendly web applications</p>
        </div>
      
      <a href='https://github.com/wemmy6673'><button className="bg-black text-white items-center hover:bg-white hover:text-black rounded-full p-3 flex flex-row space-x-1 transition duration-300 ease-in-out"><p>Go to Github</p> <BsGithub /></button></a>
    </div>
  );
};

export default Hero;
