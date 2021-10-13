import styled from 'styled-components';

const StyledHomeSection = styled.section`
  color: #f5f5f5;
  /* background: linear-gradient(to right, #348f50, #56b4d3); */
  background-image: url('https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwb2JqZWN0c3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80');
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  & h2 {
    margin: 0;
  }
`; // Tagged template literal

export default StyledHomeSection;
