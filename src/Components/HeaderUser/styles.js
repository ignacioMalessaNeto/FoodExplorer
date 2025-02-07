import styled from "styled-components";
export const Container = styled.header`
  width: 100%;
  height: 104px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.COLORS.DARK_600};
  padding: 0 10%;
  gap: 25px;

  .inputSearch::placeholder {
    text-align: center;
  }

  .favorites {
    white-space: nowrap;
    color: ${({ theme }) => theme.COLORS.CAKE_100};
  }

  .buttonOrder {
    min-width: 150px;
    max-width: 250px;
    width: 8vw;
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    padding: 10px;
    background: ${({ theme }) => theme.COLORS.GRADIENTS_200};
    border: none;
    border-radius: 5px;
    color: ${({ theme }) => theme.COLORS.CAKE_100};
    font-family: "Poppins", sans-serif;
    font-size: 100%;
    gap: 10px;
    border: 1px solid ${({ theme }) => theme.COLORS.CAKE_100};
  }
  .orderButton {
    min-width: 20px;
    width: 15%;
  }

  .order {
    display: none;
  }

  .divider {
    display: none;
  }

  button {
    background: none;
    border: none;
  }
  label {
    display: flex;
    gap: 5px;
    font-family: "Poppins", sans-serif;
  }
  
  .heading {
    width: 800px;
  }

  .labels {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  .containInputSearch {
    width: 100%;
  }

  .foodExplorerLogoMobile {
    display: none;
  }
  @media (max-width: 500px) {
    flex-direction: column;
    justify-content: center !important;

    .logoFoodExplorer {
      max-width: 165px;
    }
    .buttonHome {
      text-align: center;
    }
    .heading {
      width: 80%;
    }
  }
  @media (max-width: 750px) {
    padding: 0 10px;
    gap: 5px;
    .logoFoodExplorer {
      min-width: 150px;
      max-width: 190px;
      width: 100%;
    }
    a {
      width: 250px;
    }
  }
  @media (max-width: 1300px) {
    padding: 0 40px 0 40px;
    
    .favorites {
      display: none; 
    }

    .heading {
      max-width: 400px;
    }

    .buttonOrder {
      display: none;
    }

    .order {
      display: none;
    }

    .logout {
      display: none;
    }

    justify-content: space-between;
  }
`;
