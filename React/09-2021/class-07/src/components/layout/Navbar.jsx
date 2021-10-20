import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  background-color: var(--app-primary);
  padding: 1rem;
  position: relative;
  box-shadow: 1px 1px 5px 0 rgba(0, 0, 0, 0.4);

  & h2 {
    margin: 0;
    text-align: center;
    color: var(--app-light);
    text-transform: uppercase;
  }
`;

const Navbar = () => {
  return (
    <StyledHeader>
      <h2>Product Dashboard</h2>
    </StyledHeader>
  );
};

export default Navbar;
