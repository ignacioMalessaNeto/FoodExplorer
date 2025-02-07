import styled from "styled-components";

export const Container = styled.main`
  color: ${({ theme }) => theme.COLORS.CAKE_100};
  min-height: 417px;
  height: 100vh;
  h2 {
    margin: 25px 0 0 125px;
  }

  .containerCards {
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: no-wrap;
  }

  .noFavorites{
    font-size: 25px;
    margin-top: 10%;
    justify-content: center;
  }


  .cardFavorite{
    border-radius: 25px;
    min-width: 250px;
    height: 300px;
    border: 1px solid ${({ theme }) => theme.COLORS.CAKE_200};
    margin: 23px 0 48px 0;
    display: flex;
    z-index: 1;
    gap: 15px;    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: ${({ theme }) => theme.COLORS.DARK_200};
    padding: 20px;
    p {
      max-width: 140px;
      font-size: 16px;
    }
  }

  .imageFavorite{
    max-width: 200px;
    border-radius: 50%;
  }
`;
