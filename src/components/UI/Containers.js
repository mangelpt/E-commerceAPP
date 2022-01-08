import styled from "styled-components";
import {Device} from "../Layout/reponsive/Devices";

export const HeaderContainer = styled.header`
  height: 70px;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  display: grid;
  grid-auto-rows:70px ;
  
  @media only screen and ${Device.mobileS} {
    margin-bottom: 90px;
  }

  @media only screen and ${Device.mobileM} {
    margin-bottom: 90px;
  }
  @media only screen and ${Device.mobileL} {
    margin-bottom: 80px;
  }
  @media only screen and ${Device.tablet} {
    margin-bottom: 20px;
  }
`;

export const FooterContainer = styled.header(HeaderContainer)`
  height: 70px;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  display: grid;
  grid-auto-rows:70px ;
  
  @media only screen and ${Device.mobileS} {
    margin-bottom: 90px;
  }

  @media only screen and ${Device.mobileM} {
    margin-bottom: 90px;
  }
  @media only screen and ${Device.mobileL} {
    margin-bottom: 80px;
  }
  @media only screen and ${Device.tablet} {
    margin-bottom: 20px;
  }
`;
