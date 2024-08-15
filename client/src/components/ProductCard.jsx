import React from "react";

const ProductCard = ({ product }) => {
  const { _id, Description, Category, "Product Name": productName } = product;

  return (
    <div className='card card-compact bg-base-100 w-96 shadow-xl'>
      <figure>
        <img
          src='https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp'
          alt='Shoes'
        />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>{productName}</h2>
        <p>{Description}</p>
        <div className='card-actions justify-end'>
          <button className='btn btn-primary'>Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
