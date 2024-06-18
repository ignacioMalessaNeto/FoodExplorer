import styled from "styled-components";

export const Container = styled.div`
   button {
    background: none;
    border: none;
  }

  @media(max-width: 1300px){
    color: ${({ theme }) => theme.COLORS.DARK_600};
  }

`;
