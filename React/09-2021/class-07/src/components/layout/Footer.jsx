import React from 'react';
import styled from 'styled-components';
const StyledFooter = styled.footer`
  padding: 1rem;
  & p {
    border-top: 3px solid var(--app-dark);
    padding-top: 1rem;
    margin: 0 10%;
    text-align: center;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <p>&copy; 2021</p>
    </StyledFooter>
  );
};

export default Footer;
