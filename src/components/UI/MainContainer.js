import styled from "styled-components";
import {Device} from "../Layout/reponsive/Devices";

export const Main = styled.main`
  width: 100%;
  @media only screen and ${Device.mobileS} {
    height:100%;
  }
  @media only screen and ${Device.laptop} {
    height:83vh;
  }
`;
