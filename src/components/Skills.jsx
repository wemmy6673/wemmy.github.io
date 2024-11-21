const Skills = () => {

    return(
        <div className="w-full">
        <h1 className='px-20 text-3xl text-center md:text-left'>Stack</h1>
        <div className="grid grid-cols-2 gap-3 p-8 md:gap-6 md:py-6 md:px-20 md:w-[40%]">
            <div className="bg-blue-400 px-3 py-1 rounded-lg">
                <p className="text-lg text-white">CSS</p>

            </div>
            <div className="bg-slate-300 px-3 py-1 rounded-lg">
                <p className="text-lg text-black">TAILWIND</p>

            </div>
            <div className="bg-green-500 px-3 py-1 rounded-lg">
                <p className="text-lg text-white">JAVASCRIPT</p>

            </div>
            <div className="bg-orange-600 px-3 py-1 rounded-lg">
                <p className="text-lg text-white">REACT</p>

            </div>
            <div className="bg-black px-3 py-1 rounded-lg">
                <p className="text-lg text-white">NEXT</p>

            </div>

        </div>
        </div>
    )
}

export default Skills;