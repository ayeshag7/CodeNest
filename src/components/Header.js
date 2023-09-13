import { useState } from 'react';
import logo from "../assets/images/diginote (1).png";
import { Link } from 'react-router-dom';
import { auth, provider } from "../firebase/firebaseConfig";
import { signInWithPopup, signOut } from 'firebase/auth';

export const Header = () => {

  const white_btn = "text-base rounded md:border md:border-black md:rounded-xl px-2 py-1.5 hover:bg-gray-200 md:hover:bg-gray-700 md:hover:text-white";
  const blk_btn = "text-base text-black md:text-white rounded hover:bg-gray-200 md:border md:border-black md:bg-gray-700 md:rounded-xl px-2 py-1.5 hover:bg-white hover:text-black";
  const [hidden, setHidden] = useState(false);

  // Login and Logout Handling
  const [isLoggedIn, setLoggedIn] = useState( JSON.parse(localStorage.getItem("isLoggedIn")) || false);

  function handleLogin() {
    signInWithPopup(auth, provider).then(() => {
      setLoggedIn(true)
      localStorage.setItem("isLoggedIn", true)
    })
  };

  function handleLogout() {
    setLoggedIn(false)
    localStorage.setItem("isLoggedIn", false)
    signOut(auth)
  };


  return (
    <div className='flex flex-wrap justify-between items-center mx-2 md:mx-12 px-2 md:px-4 py-4 z-10'>

      <div className="flex items-center gap-x-1 md:gap-x-2">
        <img src={logo} alt={"logo"}
        className="h-12 w-12 md:h-14 md:w-14"/>
        <p className="text-2xl font-bold text-gray-700">CodeNest</p>
      </div>

      <button onClick={() => setHidden(!hidden)} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-black rounded-lg md:hidden hover:text-gray-700 focus:ring-gray-200" aria-controls="navbar-default" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
      </button>

      {isLoggedIn ? (
        // Logged In
        <div className={`${hidden ? "hidden" : ""} w-full md:block md:w-auto`} id="navbar-default">
          <ul className='flex flex-col gap-y-2 max-sm:border-t my-4 py-4 md:my-0 md:py-0 md:flex-row md:gap-x-2'>
            <li>
              <Link to="/" className={`${white_btn} flex md:justify-center md:items-center`}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/create" className={`${white_btn} flex md:justify-center md:items-center`}>
                Create Post
              </Link>
            </li>
            <li>
              <Link to="/" onClick={handleLogout} className={`${blk_btn} flex md:justify-center md:items-center`}>
                Logout
              </Link>
            </li>
          </ul>
        </div>
      ) : (
          // Not Logged In
          <div className={`${hidden ? "hidden" : ""} w-full md:block md:w-auto`} id="navbar-default">
            <ul className='flex flex-col gap-y-2 max-sm:border-t my-4 py-4 md:my-0 md:py-0 md:flex-row md:gap-x-2'>
              <li>
                <Link to="/" className={`${white_btn} flex md:justify-center md:items-center`}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/" onClick={handleLogin} className={`${blk_btn} flex md:justify-center md:items-center`}>
                  Login
                </Link>
              </li>
            </ul>
          </div>
      )}


    </div>
  )
}
