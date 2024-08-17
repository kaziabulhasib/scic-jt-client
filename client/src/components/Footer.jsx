import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className='bg-white dark:bg-gray-900 my-16'>
      <div className='container px-6 py-8 mx-auto'>
        <div className='flex flex-col items-center text-center'>
          <Link to='/'>
            <h1 className='text-xl text-gray-700 font-bold'>Hb Digital</h1>
          </Link>

          <div className='flex flex-wrap justify-center mt-6 -mx-4'>
            <Link
              to='/'
              className='mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400'
              aria-label='Home'>
              Home
            </Link>
            <Link
              to='/about'
              className='mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400'
              aria-label='About'>
              About
            </Link>
            <Link
              to='/products'
              className='mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400'
              aria-label='Products'>
              Products
            </Link>
          </div>
        </div>

        <hr className='my-6 border-gray-200 md:my-10 dark:border-gray-700' />

        <div className='w-full text-center'>
          <p className='text-sm text-gray-500 dark:text-gray-300'>
            © Copyright 2024. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
