import React from 'react';
import styled from 'styled-components';

const Product = styled.article`
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.4);
  border-radius: 20px;
  padding: 20px;

  & .product-details {
    display: flex;
    justify-content: space-between;
  }
`;

const ProductItem = ({ product }) => {
  return (
    <Product>
      <h3>{product.productName}</h3>
      <div className="product-details">
        <p>{product.productType}</p>
        <p>{product.productPrice} $</p>
      </div>
      <p>{product.productDescription}</p>
    </Product>
  );
};

export default ProductItem;
