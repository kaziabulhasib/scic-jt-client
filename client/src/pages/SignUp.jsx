import { Link, useNavigate } from "react-router-dom";
// import logo from "../assets/logo.svg";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import toast from "react-hot-toast";
const SignUp = () => {
  const navigate = useNavigate();
  const { createUser, signinWithGoogle } = useContext(AuthContext);
  const handleSignUP = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    const user = { name, email, password };
    console.log(user);
    //
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        navigate("/products");
      })
      .catch((error) => console.log(error));
  };

  // google login

  const handleGoogleLogin = () => {
    signinWithGoogle()
      .then((res) => {
        console.log(res.user.displayName);
        navigate("/products");
        toast.success("Google Login");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className='my-24'>
      <header className='bg-gray-700 max-w-7xl lg:px-24 py-6  '>
        <div className='container px-6 mx-auto'>
          <nav className='flex flex-col py-24 sm:flex-row sm:justify-between sm:items-center'>
            {/* <a href='#'>
              <img className='w-auto h-6 sm:h-7' src={logo} alt='cardoc' />
            </a> */}

            <div className='flex items-center mt-2 -mx-2 sm:mt-0'>
              <Link
                to='/login'
                className='px-3 py-1 text-sm font-semibold text-white transition-colors duration-300 transform border-2 rounded-md hover:bg-gray-700'>
                Sign In
              </Link>
              <a
                href='#'
                className='px-3 py-2 mx-2 text-sm font-semibold text-white transition-colors duration-300 transform bg-black rounded-md hover:bg-gray-800'>
                Sign Up
              </a>
            </div>
          </nav>
        </div>
        <div className='flex flex-col items-center lg:h-[36rem] lg:flex-row-reverse gap-12'>
          <div className='lg:w-1/2'>
            <h2 className='text-3xl font-semibold text-gray-100 lg:text-4xl'>
              Hb Collection
            </h2>

            <h3 className='mt-2 text-2xl font-semibold text-gray-100'>
              Hello <span className='text-blue-400'>Guest</span>
            </h3>

            <p className='mt-4 text-xl font-medium text-gray-100'>
              create new account or login if existing user
            </p>
          </div>

          <div className='flex mt-8 lg:w-1/2 lg:justify-end lg:mt-0'>
            <div className='w-full max-w-md bg-white rounded-lg dark:bg-gray-800'>
              <div className='px-6 py-8 text-center'>
                <h2 className='text-2xl font-semibold text-gray-700 dark:text-white'>
                  Sign Up
                </h2>

                <form onSubmit={handleSignUP}>
                  <div className='mt-4'>
                    <input
                      className='block w-full px-4 py-2 text-gray-700 placeholder-gray-400 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-500 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:ring-blue-300 focus:outline-none focus:ring'
                      name='name'
                      type='text'
                      placeholder='Name'
                    />
                    <input
                      className='block w-full mt-4 px-4 py-2 text-gray-700 placeholder-gray-400 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-500 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:ring-blue-300 focus:outline-none focus:ring'
                      name='email'
                      type='email'
                      placeholder='Email address'
                    />
                    <input
                      className='block w-full px-4 py-2 mt-4 text-gray-700 placeholder-gray-400 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-500 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:ring-blue-300 focus:outline-none focus:ring'
                      name='password'
                      type='password'
                      placeholder='Password'
                    />
                  </div>
                  {/* <input
                    type='file'
                    name='image'
                    className='file-input w-full max-w-sm my-6'
                  /> */}

                  <div className='flex items-center justify-between my-4'>
                    <button className='px-6 py-2 font-medium text-white transition-colors duration-300 transform bg-gray-900 rounded-md hover:bg-gray-800 dark:hover:bg-gray-700 focus:outline-none focus:bg-gray-800 dark:focus:bg-gray-700'>
                      Sign Up
                    </button>
                  </div>
                </form>
                <div>
                  <h1>-------------Or log in with google-------------</h1>
                  <div
                    onClick={handleGoogleLogin}
                    className='text-3xl px-6 py-4 border inline-block my-6 hover:bg-base-200 cursor-pointer'>
                    <FcGoogle />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default SignUp;
