import { Routes, Route, Navigate } from 'react-router-dom';
import { Home, SignUp, LogIn, AddHotel, MyHotels, Search } from './pages';
import { useAuthContext } from './context';

const App = () => {
  const { signedIn } = useAuthContext();

  // Protected Route Component
  const ProtectedRoute = ({ element }) => {
    return signedIn ? element : <Navigate to="/sign-in" />;
  };

  return (
    <div className=''>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<LogIn />} />
        <Route path="/add-hotel" element={<ProtectedRoute element={<AddHotel />} />} />
        <Route path="/my-hotels" element={<MyHotels />} />
        <Route path="/search" element={<Search />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};

export default App;
