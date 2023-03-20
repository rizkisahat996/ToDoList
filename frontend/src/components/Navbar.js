import { Link } from 'react-router-dom'
import React from "react";
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';

export default function Navbar({ fixed }) {

  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const { user } = useAuthContext()
  const {logout} = useLogout()

  const handleClick = () => {
    logout()
  }

  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-pink-500 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
              href="/"
            >
              About Page
            </a>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>

          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              {!user && (
              <>
              <li className="nav-item">
                <Link to="/login" className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
                  <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Login</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/signup" className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
                  <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Signup</span>
                </Link>
              </li>
              </>
              )}
              {user && (
              <>
              <span>{user.email}</span>
              <li className="nav-item">
                <Link to="/list" className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
                  <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i><span className="ml-2">To-Do List</span>
                </Link>
              </li>
              <li className="nav-item">
                  <div className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
                    <button onClick={handleClick} className="fab fa-twitter text-lg leading-lg text-white opacity-75">Logout</button>
                  </div>
                </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}