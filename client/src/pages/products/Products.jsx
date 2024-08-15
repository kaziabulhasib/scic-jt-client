import React, { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const limit = 6;

  useEffect(() => {
    fetchProducts(currentPage);
  }, [currentPage]);

  const fetchProducts = (page) => {
    fetch(`http://localhost:5000/products?page=${page}&limit=${limit}`)
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
    <div>
      <h1 className='text-3xl text-center font-bold '>Our Products</h1>

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
