import React, { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const limit = 6;

  useEffect(() => {
    fetchProducts(currentPage);
  }, [
    currentPage,
    searchQuery,
    brand,
    category,
    priceRange,
    sortBy,
    sortOrder,
  ]);

  const fetchProducts = (page) => {
    const queryParams = new URLSearchParams({
      page,
      limit,
      search: searchQuery,
      brand,
      categoryName: category, // Updated to use categoryName
      priceRange,
      sortBy,
      sortOrder,
    }).toString();

    fetch(`http://localhost:5000/products?${queryParams}`)
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

  return (
    <div className='mt-16'>
      <h1 className='text-3xl text-center font-bold '>Our Products</h1>

      {/* Filter and Search */}
      <div className='flex flex-col lg:flex-row items-center gap-4 mt-6'>
        <div className='lg:w-1/4 w-full'>
          <label className='input input-bordered flex items-center gap-2'>
            <input
              type='text'
              className='grow'
              placeholder='Search'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
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

        {/* Filters */}
        <div className='flex items-center gap-2 flex-wrap'>
          <select
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            className='select select-bordered'>
            <option value=''>Brand</option>
            <option value='BrandX'>BrandX</option>
            <option value='BrandY'>BrandY</option>
            <option value='BrandZ'>BrandZ</option>
            <option value='BrandL'>BrandL</option>
            <option value='BrandM'>BrandM</option>
            <option value='BrandN'>BrandN</option>
          </select>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className='select select-bordered'>
            <option value=''>Category</option>
            <option value='Electronics'>Electronics</option>
            <option value='Computers'>Computers</option>
            <option value='Wearables'>Wearables</option>
            <option value='Accessories'>Accessories</option>
          </select>
          <select
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
            className='select select-bordered'>
            <option value=''>Price Range</option>
            <option value='Under 1000'>Under 1000</option>
            <option value='Under 2000'>Under 2000</option>
          </select>
        </div>

        {/* Sorting */}
        <div className='flex items-center gap-2 flex-wrap'>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className='select select-bordered'>
            <option value=''>Sort By</option>
            <option value='price'>Price</option>
            <option value='date'>Date Added</option>
          </select>
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className='select select-bordered'>
            <option value='asc'>Ascending</option>
            <option value='desc'>Descending</option>
          </select>
        </div>
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
