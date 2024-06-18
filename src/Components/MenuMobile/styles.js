import styled from "styled-components";

export const Container = styled.div`
  width: 100px;
  display: none;
  button {
    background: none;
    border: none;
  }
  @media(max-width: 1300px){
    display: flex;
  }
`;
