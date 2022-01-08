import styled from "styled-components";

export const Grid = styled.section`
  display: grid;
  padding: 5px 30px;
  margin: 0 auto;
  width: 100%;
  //TODO: change this
  height: fit-content;
  grid-auto-flow: dense;
  gap: ${props => props.gap}px;
  grid-template-columns: repeat(auto-fit, minmax(${props => props.size}px, 1fr));
  grid-template-rows: repeat(${props => props.rows}, 350px);

  a {
    text-decoration: none;
  }
`;
