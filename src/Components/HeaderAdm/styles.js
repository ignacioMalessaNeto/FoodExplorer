import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 104px;
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.COLORS.DARK_600};
  padding: 0 123px;
  gap: 2%;

  .orderAdm {
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    padding: 10px;
    border: none;
    border-radius: 5px;
    color: ${({ theme }) => theme.COLORS.CAKE_100};
    font-family: "Poppins", sans-serif;
    font-size: 100%;
    gap: 10px;
  }

  .buttonOrder {
    display: flex;
    align-items: center;
    padding: 10px 20px;
    background: ${({ theme }) => theme.COLORS.TOMATO_100};
    border: none;
    border-radius: 5px;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-family: "Poppins", sans-serif;
    gap: 10px;
  }

  .order {
    display: none;
  }

  .divider {
    display: flex;
  }

  button {
    background: none;
    border: none;
  }

  div {
    width: 500px;
  }

  

  @media (max-width: 1300px) {
    padding: 0 80px 0 80px;

    .heading {
      max-width: 400px;
    }

    .buttonOrder {
      display: none;
    }

    .order {
      display: flex;
    }
  }

  @media (max-width: 800px) {
    padding: 0 80px 0 80px;

    .labels {
      display: none;
    }

    .heading {
      max-width: 400px;
    }

    .order {
      display: flex;
    }
  }
`;

export const Labels2 = styled.div`
  display: none;
  @media (max-width: 800px) {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }

  .buttonAddDishMobile {
    display: flex;
    padding: 16px 46.5px;
    background: ${({ theme }) => theme.COLORS.TOMATO_100};
    border: none;
    border-radius: 5px;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-family: "Poppins", sans-serif;
    gap: 10px;
  }
`;
