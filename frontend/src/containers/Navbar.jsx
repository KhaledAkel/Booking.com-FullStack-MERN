import { SignBtn, Logo } from '../components';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../context';

const Navbar = () => {
  const { signedIn } = useAuthContext();
  return (
    <div className='w-full section-container py-7 flex items-center justify-between'>
        <Logo />
        <div className='flex items-center justify-center gap-x-11'>
            <div className='flex max-lg:hidden items-center font-medium text-sm gap-x-5'>
                <Link to='/login' className='hover:text-tertiary'>Home</Link>
                <Link to='/login' className='hover:text-tertiary'>About</Link>
                <Link to='/login' className='hover:text-tertiary'>Sprcial Offers</Link>
                <Link to='/login' className='hover:text-tertiary'>Trending</Link>  
            </div>
            {signedIn ?
            <h1>Avatar</h1>
              :
            <SignBtn text="Sign up" to="/sign-up" />
            }

        </div>
    </div>
  )
}

export default Navbar
