import { girl, airplane, couple, history, market, man } from '../assets'
import { SearchBar } from '../components'

const Header = () => {
  return (
    <div className="w-full section-container h-[75vh] flex justify-between max-lg:justify-center  rounded-xl pt-11 max-lg:pt-6">
        <div className="w-[40%] max-lg:w-full mt-24 max-lg:mt-6 text-quaternary max-lg:text-center">
            <div className="text-8xl max-lg:text-5xl font-semibold">
                <h1 >Let's</h1>
                <h1 >
                    <span className="underline decoration-tertiary">explore</span> the
                </h1>
                <h1 className=" mb-3">world</h1>
            </div>
            <p className="text-gray-600 font-medium text-sm">Enjoy the breathtaking view of nature,</p>
            <p className="text-gray-600 font-medium text-sm mb-14 max-lg:mb-5 ">and live your dreams in our homes</p>
            <SearchBar />
        </div>
        <div className="w-[60%] h-full max-lg:hidden grid grid-cols-3 gap-x-2">
            <div className="h-full col-span-1 grid grid-rows-10 gap-y-2">
                <div className="row-span-6 relative">
                    <img src={girl} alt="Girl" className="object-cover rounded-2xl w-full h-full absolute top-0 left-0" />
                </div>
                <div className="row-span-4 relative">
                    <img src={history} alt="Airplane" className="object-cover rounded-2xl w-full h-full absolute top-0 left-0" />
                </div>
            </div>
            <div className="h-full col-span-1 grid grid-rows-10 gap-y-2">
                <div className="row-span-4 relative">
                    <img src={couple} alt="Couple" className="object-cover rounded-2xl w-full h-full absolute top-0 left-0" />
                </div>
                <div className="row-span-6 relative">
                    <img src={market} alt="History" className="object-cover rounded-2xl w-full h-full absolute top-0 left-0" />
                </div>
            </div>
            <div className="h-full col-span-1 grid grid-rows-10 gap-y-2">
                <div className="row-span-3 relative">
                    <img src={airplane} alt="Girl" className="object-cover rounded-2xl w-full h-full absolute top-0 left-0" />
                </div>
                <div className="row-span-7 relative">
                    <img src={man} alt="Airplane" className="object-cover rounded-2xl w-full h-full absolute" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header
