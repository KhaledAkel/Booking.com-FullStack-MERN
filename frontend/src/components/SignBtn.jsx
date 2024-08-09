import { Link } from "react-router-dom"

const SignBtn = (props) => {
  return (
    <Link to={props.to} className="hover:bg-black
                              text-md font-bold w-20 h-9 text-white
                              flex items-center justify-center rounded
                              bg-primary duration-300
                              max-lg:w-24
                              ">
        {props.text}
    </Link>
  )
}

export default SignBtn
