import { BsJustifyLeft, BsXLg, BsInstagram, BsTwitterX, BsLinkedin, BsEnvelope } from "react-icons/bs";
const Footer = () => {

    return(
        <div className="bg-gray-900 p-8 md:p-20 flex flex-col space-y-6">

            <div className='flex justify-between'>

                <h1 className="text-white text-sm md:text-xl">WemiTheWild</h1>

                <h1 className="text-white text-sm md:text-xl">Get in touch with me today!</h1>




            </div>

            <div className='flex justify-between'>

                <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-6">
                    <div className='flex-col space-y-2 text-white text-xs md:text-sm'>
                    <h1 className="">Email:</h1>
                    <h1 className=''>okunolawemzy@gmail.com</h1>
                    </div>

                    <div className='flex-col space-y-2 text-white text-xs md:text-sm'>
                    <h1 className="">Phone Number:</h1>
                    <h1 className=''>+234-80-35213805</h1>
                    </div>

                </div>
                <div className='flex flex-row space-x-6 text-lg text-white'>
                    <a href="https://www.instagram.com/ogwemmy"><BsInstagram /></a>
                    <a href="https://x.com/wemithewild"><BsTwitterX /></a>
                    <a href="https://www.linkedin.com/in/okunola-oluwawemi-477171222?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><BsLinkedin /></a>
                    
                    

                </div>

            </div>
        <hr></hr>

        <p className='text-center text-xs text-white'>Available on all platforms</p>


        </div>
    )

}

export default Footer