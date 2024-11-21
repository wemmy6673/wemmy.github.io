import { BsInfoCircle } from "react-icons/bs";

const Specs =[{
        id:1,
        title: "Full Website Design",
        text:"Crafting immersive and engaging full-page website designs that,deliver seamless user experience",
    },
    {
        id:2,
        title: "Landing Page Design",
        text:"Crafting first impressions with landing page designs elevating your online presence effortlessly",
    },
    
    {
        id:3,
        title: "Mobile Responsiveness",
        text:"Building user friendly and interactive Websites that work well on all devices and screen sizes",
    },
      {
        id:4,
        title: "Full website Design",
        text:"Crafting immersive and engaging full-page website designs that captivate audiences",
      }]
const Description = () =>{

    return(
        <div className='flex flex-col py-20 md:py-16'>
            <h1 className='text-3xl text-center'>What i do</h1>
            <div className='grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-10 p-10 md:p-20 md:text-justify'>
                {Specs.map((spec) => (
                    <div key={spec.id} className='flex flex-row space-x-4 shadow-md rounded-sm p-6 md:p-8 items-center'>
                        <div className='justify-center'>
                            <BsInfoCircle />
                        </div>
                        
                        <div>
                            <h1 className='text-xl font-semibold py-2'>{spec.title}</h1>
                            <p>{spec.text}</p>
                        </div>
                    </div>
                ))}

            </div>

        </div>
    )
}

export default Description;