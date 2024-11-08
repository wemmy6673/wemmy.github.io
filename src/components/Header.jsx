import { BsJustifyLeft } from "react-icons/bs";
const Header = () => {

    return(
        <>
        <div className='flex p-4 md:hidden text-4xl bg-slate-100 border border-b-slate-100'>

            <BsJustifyLeft />

        </div>
        <div className="hidden md:flex md:flex-row justify-between bg-slate-100 p-8">
            <div className="flex flex-row space-x-3 items-center">
                <small className="text-black">okunolawemzy@gmail.com</small>
                <button className="bg-white rounded-2xl text-black px-8 py-1">CV</button>

            </div>

            <div className='flex flex-row space-x-3 items-center'>
            <small>LinkedIn</small>
            <small>Instagram</small>
            <small>Twitter</small>

            </div>

        </div>
        </>
    )


}

export default Header

