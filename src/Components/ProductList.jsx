import React, { useState } from "react";
import "./ProductList.css";

const ProductList = ({ products }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product) => {
    setSelectedProduct(product.name);
  };

  return (
    <div className="product-list">
      <h1>Nuestras flores</h1>
      <div className="products-grid">
        {products.map((product, index) => (
          <div
            className={`product-card ${
              selectedProduct === product.name ? "selected" : ""
            }`}
            key={index}
            onClick={() => handleProductClick(product)}
          >
            <div className="product-image"></div>
            <h3>{product.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
