import Cordni from '../images/cordni.png';
import Zonecam from '../images/logo.png'

const Projects = () => {

    return(
        
        <div className='flex flex-col space-y-10 px-6 py-6 md:px-20'>

            <h1 className='text-3xl'>Recent Projects</h1>

            <div className='flex flex-col space-y-8 md:flex-row md:space-x-6'>
                <div className='flex flex-col space-y-5 md:w-1/4 shadow-lg p-4'>
                    <img src={Zonecam} width="100" height="100"/>
                    <p>An AI based Web application used to predict the geopolitical zones of Nigerians by mere facial recognition .</p>
                    <a href="https://zonecam.vercel.app"><h1 className="text-blue-500">Click here to preview</h1></a>

                </div>

                <div className='flex flex-col space-y-5 md:w-1/4 shadow-lg p-4'>
                    <img src={Cordni} width="200" height="200"/>
                    <p>A Website built with the purpose of keeping track of activities and tasks to be carried out by employees of an organization.</p>

                </div>

            </div>

        </div>

    )
}

export default Projects;