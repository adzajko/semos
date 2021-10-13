import styled from 'styled-components';

const MoeKopce = styled.button`
  display: block;
  min-width: 150px;
  margin: auto;
  padding: 1rem;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  border: 2px solid ${(props) => props.bgColor || 'palevioletred'};
  background-color: ${(props) => props.bgColor || 'palevioletred'};
  color: ${(props) => props.textColor || '#f5f5f5'};
  box-shadow: 1px 1px 5px 0 rgba(0, 0, 0, 0.4);
  border-radius: 1000px;
`;

export default MoeKopce;
