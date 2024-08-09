// Code: App component
import { Routes, Route, Navigate } from 'react-router-dom'
import { Home, SignUp, LogIn } from './pages'


const App = () => {
  return (
    <div className=''>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<LogIn />} />
          <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
    
  )
}

export default App
