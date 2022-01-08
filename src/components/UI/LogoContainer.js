import styled from "styled-components";
import {Device} from "../Layout/reponsive/Devices";

export const LogoContainer = styled.span`
  background-color: palegreen;
  width: 100%;
  display: flex;

  @media only screen and ${Device.mobileS} {
    justify-content: center;
  }
  @media only screen and ${Device.tablet} {
    justify-content: start;
  }
  svg {
    fill:  #C18C02;
    width: 200px;
    height: 70px;
  }
`;