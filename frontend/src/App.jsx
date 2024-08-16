// Code: App component
import { Routes, Route, Navigate } from 'react-router-dom'
import { Home, SignUp, LogIn, AddHotel } from './pages'
import { useAuthContext } from './context';


const App = () => {
  const { signedIn } = useAuthContext();
  return (
    <div className=''>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<LogIn />} />
          <Route path="/add-hotel" element={ <AddHotel /> } />
          <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
    
  )
}

export default App
