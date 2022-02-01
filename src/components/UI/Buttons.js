import styled from "styled-components";

export const TransparentButton = styled.button`
  margin: auto;
  padding: 5px 15px;
  border-radius: 4px;
  border: 1px solid gray;
  background-color: transparent;
 transition: all .1s ease-in-out;
  &:hover {
    background-color:rgba(193, 140, 2,.9);
    border: 1px solid rgba(193, 140, 2,.9);
  }
`;

export const SignInButton=styled(TransparentButton)`
  background-color: #0000;
`;

export const SignInGoogleButton=styled(TransparentButton)`
  background-color: blue;
`;