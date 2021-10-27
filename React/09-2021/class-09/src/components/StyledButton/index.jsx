import styled from 'styled-components';

const PlantButton = styled.button`
  display: block;
  width: ${(props) => (props.width ? props.width : '90%')};
  margin: auto;
  cursor: pointer;
  font-size: 22px;
  border-radius: 10px;
  border: none;
  padding: 10px;
  box-shadow: 0 0 3px 0 black;
  text-transform: uppercase;
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.color};
`;

export default PlantButton;
