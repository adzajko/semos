import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getAllProducts } from '../../services/products';
import ProductItem from '../ProductItem';
import { Button } from '@mui/material';

const StyledDashboard = styled.section`
  padding: 50px 5%;
  & .products-container {
    display: grid;
    grid-template-columns: 30% 30% 30%;
    place-content: center;
    column-gap: 3%;
    row-gap: 100px;
    padding: 20px;
  }

  & .product-actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const Dashboard = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getAllProducts()
      .then((data) => setProducts(data))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleLogout = () => {};

  return (
    <StyledDashboard>
      <div className="product-actions">
        <h2>Products</h2>
        <Button color="error" variant="contained" onClick={handleLogout}>
          Log Out
        </Button>
      </div>
      <div className="products-container">
        {products.map((product) => (
          <ProductItem product={product} key={product.id} />
        ))}
      </div>
    </StyledDashboard>
  );
};

export default Dashboard;
