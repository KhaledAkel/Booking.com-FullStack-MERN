import { Link } from "react-router-dom"
import { FaGoogle } from "react-icons/fa";

const GoogleBtn = () => {
  return (
    <Link to='/' className="hover:bg-black
                              text-sm font-bold w-[60%] h-11 text-white
                              flex items-center justify-center rounded
                              bg-primary duration-300
                              gap-x-2
                              max-lg:w-full
                              ">
        <FaGoogle className='text-[15px] mb-[2px] '/>
        <div>Continue with Google</div>
    </Link>
  )
}

export default GoogleBtn
