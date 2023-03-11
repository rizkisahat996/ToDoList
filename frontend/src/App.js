import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'

// pages and components
import Home from './pages/Home'
import Navbar from './components/Navbar'
import User from './pages/User'
import Login from './pages/Login'
import Signup from './pages/Signup'
import List from './pages/List'

function App() {
  const { user } = useAuthContext()
  
  return (
    <div className="App">
      <BrowserRouter basename="/">
        <Navbar />
        <div className="pages min-h-screen relative">
          <Routes>
            <Route 
              path="/"
              element={ <Home /> }
            />
            <Route 
              path="/user"
              element={ <User /> }
            />
            <Route
              path="/list"
              element={ user ? <List /> : <Navigate to="/login" /> }
            />
            <Route
              path="/login"
              element={ !user ? <Login /> : <Navigate to="/list" /> }
            />
            <Route
              path="/signup"
              element={ !user ? <Signup /> : <Navigate to="/list" /> }
            />
          </Routes>
        </div> 
      </BrowserRouter>
    </div>
  );
}

export default App;
