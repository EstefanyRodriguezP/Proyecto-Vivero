import React from "react";

const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      <h1>Nuestras flores</h1>
      <div className="products-grid">
        {products.map((product, index) => (
          <div className="product-card" key={index}>
            <div className="product-image"></div>
            <h3>{product.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
