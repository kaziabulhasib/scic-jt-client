import React, { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard";

const Products = () => {
  const url = "http://localhost:5000/products";
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      });
  }, []);

  return (
    <div>
      <h1>This is products : {products.length}</h1>

      <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>
        {products.map((product) => (
          <ProductCard product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default Products;
