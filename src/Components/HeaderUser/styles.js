import styled from "styled-components";
export const Container = styled.header`
  width: 100%;
  height: 104px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: ${({ theme }) => theme.COLORS.DARK_600};
  padding: 0 123px;
  gap: 32px;

  .buttonOrder {
    display: flex;
    align-items: center;
    padding: 16px 46.5px;
    background: ${({ theme }) => theme.COLORS.TOMATO_100};
    border: none;
    border-radius: 5px;
    color: ${({ theme }) => theme.COLORS.DARK_600};
    font-family: "Poppins", sans-serif;
    gap: 10px;
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

  @media (max-width: 1300px) {
    padding: 0 40px 0 40px;
    
    
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

  @media (max-width: 750px) {
    padding: 0 20px;
    gap: 5px;

    a{
      width: 250px;
    }

    .logoFoodExplorer {
      display: none;
    }

    .foodExplorerLogoMobile {
      display: block;
      width: 100%;
    }
  }
  @media (max-width: 480px) {
    padding: 0 20px;
    gap: 5px;
  }
`;
