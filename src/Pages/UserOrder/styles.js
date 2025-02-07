import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  .containerCards {
    margin: 0 auto;
    width: 80%;
    border-collapse: collapse;
    margin-top: 20px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    overflow: scroll;
    max-height: 400px;
  }

  th,
  td {
    padding: 12px 15px;
    text-align: left;
  }

  th {
    background-color: ${({ theme }) => theme.COLORS.CAKE_100};
    color: ${({ theme }) => theme.COLORS.CAKE_200};
    font-family: "Poppins", sans-serif;
    font-size: 14px;
  }

  th:nth-child(1) {
    border-top-left-radius: 20px;
  }

  th:nth-last-child(1) {
    border-top-right-radius: 20px;
  }

  tr {
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.CAKE_200};
  }

  tbody {
    border: 1px solid ${({ theme }) => theme.COLORS.CAKE_200};
  }

  img {
    width: 50px;
    height: 50px;
    border-radius: 8px;
    object-fit: cover;
  }

  h3 {
    font-size: 16px;
    margin: 0;
    color: #333;
  }

  .description {
    font-size: 14px;
    color: #666;
    margin: 0;
  }

  .noFavorites {
    text-align: center;
    padding: 20px;
    font-size: 18px;
    color: #666;
  }

  .removeDish {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  .removeDish:hover {
    cursor: pointer;
    filter: brightness(0.9);
  }

  .containerFinishedOrder {
    font-family: "Poppins", sans-serif;
    max-width: 600px;
    display: flex;
    gap: 10px;
    margin-top: 40px;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
  }

  #notes_use {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 200px;
  }

  .buttonFinish,
  .buttonCancel,
  .totalOrder {
    padding: 10px;
    background: #065e7c;
    border-radius: 5px;
    color: white;
    text-align: center;
    white-space: nowrap;
  }

  .buttonFinish:hover,
  .buttonCancel:hover {
    cursor: pointer;
    filter: brightness(0.9);
  }

  .order_status {
    max-height: 300px;
    overflow: auto;
    width: 80%;
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .orderCard {
    color: #333;
    background: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border: 1px solid ${({ theme }) => theme.COLORS.CAKE_200};
  }

  .orderCard h3 {
    font-size: 18px;
    margin-bottom: 10px;
    color: #333;
  }

  .orderCard p {
    font-size: 14px;
    color: #666;
    margin: 5px 0;
  }

  @media (max-width: 768px) {
    th,
    td {
      padding: 10px;
      font-size: 12px;
    }

    img {
      width: 40px;
      height: 40px;
    }

    h3 {
      font-size: 14px;
    }

    .description {
      font-size: 12px;
    }

    .containerFinishedOrder {
      flex-direction: column;
      width: 100%;
    }

    #notes_use {
      width: 100%;
    }

    .order_status {
      width: 100%;
    }
  }
`;