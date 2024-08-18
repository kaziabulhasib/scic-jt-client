import { Link, NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className='my-24 min-h-[45vh]'>
      <h1 className='lg:text-3xl text-2xl text-center font-medium my-6'>
        Welcome to Hb collection
      </h1>

      <Link to='/products'>
        <button className='btn btn-outline btn-error'>See products</button>
      </Link>
    </div>
  );
};

export default Home;
