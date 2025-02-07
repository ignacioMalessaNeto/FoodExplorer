import styled from "styled-components";

export const Container = styled.div`
  display: none;
  button {
    background: none;
    border: none;
  }
  .order {
    color: ${({ theme }) => theme.COLORS.CAKE_200};

    svg {
      fill: ${({ theme }) => theme.COLORS.CAKE_200};
    }
  }

  .favorites {
    white-space: nowrap;
    color: ${({ theme }) => theme.COLORS.CAKE_100};
  }


  @media (max-width: 500px) {
    position: absolute;
    top: 0.4%;
    right: 1%;
  }

  @media (max-width: 1300px) {
    display: flex;
  }
`;
