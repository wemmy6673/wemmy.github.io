import { TypeAnimation } from 'react-type-animation';
import Wemi from '../images/wemi.jpeg';
const Hero = () => {

    return(
        <div className="bg-slate-100 p-16 w-full flex flex-col space-y-6 justify-center items-center" style={{ borderBottomLeftRadius: '25%', borderBottomRightRadius: '25%' }}>
            <img src={Wemi} alt="" width="" height="" className='rounded-full w-56 h-56 object-cover border-4 border-white' />
            <div className="w-full text-center">
                <TypeAnimation
                     sequence={[
                     'Hi there! I\'m Wemmy',
                     1000,
                        'I am a Front-end Web developer',
                        1000,
                        'I build user friendly web applications',
                        1000,
                        'Let\'s give your brand a creative start right away',
                         1000,
                    ]}
                 wrapper="span"
                 speed={50}
                repeat={Infinity}
                className="font-semibold text-4xl text-gradient-to-r from-black to-gray-600"
                />
         </div>
         <button className='bg-black text-white rounded-full p-3'>Learn more</button>
        </div>

    )
}

export default Hero;