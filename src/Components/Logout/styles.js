// import styled from "styled-components";

// export const Container = styled.div`
//    button {
//     background: none;
//     border: none;
//     display: flex;
//     align-items: center;
//     gap: 10px;
//     color: ${({ theme }) => theme.COLORS.CAKE_100};
//     font-family: "Poppins", sans-serif;
//     font-size: 100%;
//   }

//   @media(max-width: 1300px){
//     color: ${({ theme }) => theme.COLORS.DARK_600};
//   }

// `;
import styled from "styled-components";

export const Container = styled.div`
  button {
    background: none;
    border: none;
    display: flex;
    align-items: center;
    gap: 10px;
    color: ${({ theme }) => theme.COLORS.CAKE_100};
    font-family: "Poppins", sans-serif;
    font-size: 1rem;
    cursor: pointer;
    transition: color 0.3s ease, transform 0.2s ease;

    &:hover {
      color: ${({ theme }) => theme.COLORS.CAKE_200};
      transform: scale(1.05);
    }

    &:active {
      transform: scale(0.95);
    }

   
  }

  @media (max-width: 1300px) {
    button {
      color: ${({ theme }) => theme.COLORS.DARK_600};
    }
  }
`;
