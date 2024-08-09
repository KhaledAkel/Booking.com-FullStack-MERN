import { MdOutlineAirplanemodeActive } from "react-icons/md";
import { Logo } from '../components'
import { SignUpForm } from '../containers'

const SignUp = () => {
  return (
    <div className="w-full h-[100vh] flex items-center justify-center overflow-hidden">
        <div className="w-1/2 max-lg:w-[90%] h-3/2 bg-white rounded-3xl shadow-xl p-8 relative z-20 " >
             <div><Logo /></div>
             <div className="w-full py-9 flex justify-between relative z-10 ">
                <SignUpForm width="100%" height="100% "/>
                <div className="max-lg:hidden w-[50%] relative">
                    <div className="absolute right-[-36px] bottom-[50px] text__color-primary text-[600%] font-bold w-60 text-end -rotate-90 font-DS">Welcome</div>
                </div>
             </div>
             <MdOutlineAirplanemodeActive className="text-[100px] absolute bottom-[-500px] left-1/4 text-white animation__slideAirplaneDelayed z-0"/>
             <MdOutlineAirplanemodeActive className="text-[100px] absolute bottom-[-500px] left-1/2 text-white animation__slideAirplane z-0"/>
        </div>

    </div>
  )
}

export default SignUp
