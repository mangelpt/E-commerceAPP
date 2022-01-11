import styled from "styled-components";
import {Device} from "../Layout/reponsive/Devices";

export const HeaderContainer = styled.header`
  background-color: #f2f2f2;
  height: 70px;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  display: grid;
  grid-auto-rows: 70px;
  @media only screen and ${Device.mobileS} {
    margin-bottom: 90px;
  }
  @media only screen and ${Device.tablet} {
    margin-bottom: 20px;
  }
`;

export const FooterContainer = styled.footer`
  border-top: 2px solid #f2f2f2;
  height: 50px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  align-items: center;
  justify-items: center;
  margin-top: 10px;
  align-self: end;

  a {
    text-decoration: none;
  }

  svg {
    height: 20px;
    fill: #4a4a4a;
  }
`;

export const CategoryContainer = styled.div`
  height: 50px;
  width: 100%;
  border-bottom: 2px solid #f2f2f2;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  align-items: center;
  justify-items: center;
  margin-top: 10px;

  h5 {
    justify-self: end;
    margin-right: 10%;
  }

  h2 {
    justify-self: start;
    margin-left: 10%;
  }

  svg {
    height: 30px;
    fill: #4a4a4a;
  }
`;

export const ItemCardContainer = styled.div`
  height: fit-content;
  width: auto;
  display: flex;
  flex-direction: column;
  transition: all .1s ease-in-out;

  button {
    display: none;
  }

  &:hover button {
    display: block;
  }
`;

export const ItemDetailsContainer = styled.section`
  display: flex;
  justify-content: space-between;
`;

