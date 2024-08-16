import { Link, NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className='my-24'>
      <h1 className='text-3xl text-center font-medium my-6'>
        Welcome to Hb collection
      </h1>

      <Link to='/products'>
        <button className='btn btn-outline btn-error'>See products</button>
      </Link>
    </div>
  );
};

export default Home;
