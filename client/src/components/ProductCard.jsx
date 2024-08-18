import React from "react";

const ProductCard = ({ product }) => {
  const {
    _id,
    Description,
    Category,
    productName,
    productImage,
    brandName,
    categoryName,
    ratings,
    price,
  } = product;

  return (
    <div className='card card-compact bg-base-100 w-96 shadow-xl'>
      <figure>
        <img src={productImage} alt={productName} className='h-48' />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>{productName}</h2>
        <p className=' text-[14px] text-left font-medium my-4 text-blue-800'>
          Brand: <span className=''>{brandName}</span>{" "}
          <span className='ml-8 '>Category : {categoryName}</span>
        </p>
        <p className=' text-[14px] text-left font-medium my-4 text-blue-800 '>
          Ratings: <span className=''>{ratings}</span>{" "}
          <span className='ml-8 '>Price : {price}</span>
        </p>

        <div className='card-actions justify-end'>
          <button className='btn  btn-neutral btn-sm'>Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
