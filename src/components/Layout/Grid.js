import styled from "styled-components";

export const Grid = styled.section`
  display: grid;
  padding: 4em;
  width: 90%;
  //TODO: change this
  height: 520px;
  background-color: orangered;
  grid-template-columns: repeat(auto-fit, minmax(${props => props.size}px, 1fr));
`;
