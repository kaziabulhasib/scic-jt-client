import { useContext } from "react";
// import logo from "../assets/logo.svg";
import { Link, NavLink, useNavigate } from "react-router-dom";

import "./navbar.css";
import toast from "react-hot-toast";
import { AuthContext } from "../providers/AuthProvider";
const NavBar = () => {
  const { logout, user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    toast.success("Logout Sucessfull");
    // navigate("/signup");
  };
  const navLinks = (
    <>
      <li className='nav-link'>
        <NavLink to='/'>Home</NavLink>
      </li>
      <li className='nav-link'>
        {" "}
        <NavLink to='/about'>About</NavLink>
      </li>

      <li className='nav-link'>
        <NavLink to='/products'>Products</NavLink>
      </li>
    </>
  );
  return (
    <div className='navbar bg-base-100 opacity-90   py-4   z-10   h-20 mb-24  mx-auto'>
      <div className='navbar-start'>
        <div className='dropdown'>
          <div tabIndex={0} role='button' className='btn btn-ghost lg:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className='menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow'>
            {navLinks}
          </ul>
        </div>
        <Link to='/'>
          <h1 className='text-xl text-gray-700'>Hb Digital</h1>
        </Link>
      </div>
      <div className='navbar-center hidden lg:flex'>
        <ul id='nav-cen'>{navLinks}</ul>
        {/* <button className='btn btn-outline btn-error' onClick={handleLogout}>
          Logout
        </button> */}
      </div>

      <div className='navbar-end'>
        <div>
          {user ? (
            <>
              <div className='dropdown '>
                <div
                  tabIndex={0}
                  role='button'
                  className='btn btn-ghost btn-circle avatar'>
                  <div className='w-10 rounded-full'>
                    <img
                      alt='Tailwind CSS Navbar component'
                      src={user?.photoURL}
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className='menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-center'>
                  <li>
                    <a>{user?.displayName}</a>
                  </li>
                  <li onClick={handleLogout}>
                    <a>Logout</a>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <NavLink className='btn btn-outline btn-sm' to='/login'>
              Login
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
