import React, { useEffect, useState } from "react";

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
    </div>
  );
};

export default Products;
