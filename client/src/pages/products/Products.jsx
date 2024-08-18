import React, { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchQuery, setSearchQuery] = useState(""); // State to store the search query
  const limit = 6;

  useEffect(() => {
    fetchProducts(currentPage, searchQuery);
  }, [currentPage, searchQuery]);

  const fetchProducts = (page, query = "") => {
    fetch(
      `http://localhost:5000/products?page=${page}&limit=${limit}&search=${query}`
    )
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setTotalPages(data.totalPages);
      });
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value); // Update search query state on input change
    setCurrentPage(1); // Reset to first page on new search
  };

  return (
    <div className='mt-16'>
      <h1 className='text-3xl text-center font-bold '>Our Products</h1>
      <div className='lg:w-1/4 w-1/2 mt-6'>
        {/* Search input */}
        <label className='input input-bordered flex items-center gap-2'>
          <input
            type='text'
            className='grow'
            placeholder='Search'
            value={searchQuery}
            onChange={handleSearchInputChange} // Handle input change
          />
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 16 16'
            fill='currentColor'
            className='h-4 w-4 opacity-70'>
            <path
              fillRule='evenodd'
              d='M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z'
              clipRule='evenodd'
            />
          </svg>
        </label>
      </div>

      <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 my-8 gap-6'>
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>

      <div className='flex justify-center items-center gap-6'>
        <button
          className='btn btn-primary'
          onClick={handlePreviousPage}
          disabled={currentPage === 1}>
          Previous
        </button>

        <span className='text-xl font-medium '>
          Page {currentPage} of {totalPages}
        </span>

        <button
          className='btn btn-primary'
          onClick={handleNextPage}
          disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Products;
