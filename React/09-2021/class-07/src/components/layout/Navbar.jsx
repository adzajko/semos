import React from 'react';
import styled from 'styled-components';
import { useUserContext } from '../../context/auth';

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

  & p {
    margin-top: 12px;
    text-align: right;
    color: var(--app-light);
  }
`;

const Navbar = () => {
  const { activeUser } = useUserContext();
  return (
    <StyledHeader>
      <h2>Product Dashboard</h2>
      {activeUser && <p>Currently logged in as: {activeUser}.</p>}
    </StyledHeader>
  );
};

export default Navbar;
