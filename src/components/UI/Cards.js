import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: ${props => props.height || 240}px;
  background-repeat: no-repeat;
  background-image: url(${props => props.image || "none"});
  background-position: center;
  background-size: cover;
`;

export const TinyCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
  width: 130px;
  padding: 10px;
  background-color: ${props => props.color ||  'rgb(187, 187, 187, .6)'};
  height: 100px;
  transition: all .3s ease-in-out;
  cursor: pointer;
  &:hover {
    background-color: ${props => props.color ||  'rgb(170, 170, 170)'};
  }
`;
