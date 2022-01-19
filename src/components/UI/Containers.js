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
  grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
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
  grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
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

export const CollapsibleContainer = styled.span`
  cursor: pointer;
  height: fit-content;
  align-self: center;
  margin-right: 10px;
  margin-top: 10px;
  margin-bottom: 18px;
  svg{
    width: 45px;
    position: absolute;
    cursor: pointer;
  }
  span{
    height: fit-content;
    position: relative;
    color: #fff;
    font-weight: bold;
    font-size: 10px;
    top: 12px;
    left: 16px;
  }
`;

export const CollapsibleContentContainer = styled.div`
  margin-top: 30px;
  position: absolute;
  background-color: #f2f2f2;
  top: 5%;
  right: 2%;
  display: ${props => props.collapsed && 'none'};
  width: 30vw;
  height: fit-content;
  button{
    width: 100%;
    border-radius: 0;
  }
  @media only screen and ${Device.mobileS} {
    top: 15%;
    right: 2%;
    width: 50vw;
  }
  @media only screen and ${Device.tablet} {
    top: 5%;
    right: 2%;
    width: 20vw;
  }
`;

export const MiniCartContainer = styled.div`
  width: 100%;
  margin: auto;
  padding: 2px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border: 1px solid gray;
  span{
    width:${props => props.width || '19%'};
    text-align: center;
  }
`;