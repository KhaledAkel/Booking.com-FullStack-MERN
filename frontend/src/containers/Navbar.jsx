import { SignBtn, Logo } from '../components';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../context';
import { Menu } from '../containers';



const Navbar = () => {
  const { signedIn } = useAuthContext();
  return (
    <div className='w-full section-container py-7 flex items-center justify-between relative'>
        <Logo />
        <div className='flex items-center justify-center gap-x-11'>
            <div className='flex max-lg:hidden items-center font-medium text-sm gap-x-5'>
                <Link to='/login' className='hover:text-tertiary'>Home</Link>
                <Link to='/login' className='hover:text-tertiary'>About</Link>
                <Link to='/login' className='hover:text-tertiary'>Sprcial Offers</Link>
                <Link to='/add-hotel' className='text-md font-bold p-2 text-white
                              flex items-center justify-center rounded
                              bg-primary hover:bg-tertiary duration-300
                              max-lg:w-24'>
                              List Your Proberty</Link>  
            </div>
            {signedIn ?
                <Menu />
              :
            <SignBtn text="Sign up" to="/sign-up" />
            }

        </div>
    </div>
  )
}

export default Navbar
