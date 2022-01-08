import styled from "styled-components";
import {Device} from "../Layout/reponsive/Devices";

export const Main = styled.main`
  background-color: darkgreen;
  width: 100%;
  @media only screen and ${Device.mobileS} {
    height:100%;
  }
  @media only screen and ${Device.mobileM} {
    height:100%;
  }
  @media only screen and ${Device.mobileL} {
    height:100%;
  }
  @media only screen and ${Device.tablet} {
    height:83vh;
  }
`;
