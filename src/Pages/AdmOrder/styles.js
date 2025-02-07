import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  padding: 20px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;

  select, input {
  padding: 8px;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.COLORS.CAKE_200};
  font-size: 14px;
  background: #fff;
  color: #333;
}

select {
  cursor: pointer;
}

input {
  width: 100%;
}


  .buttonEdit{
    width: 130px;
    padding: 15px;
    border-radius: 5px;
    background:  ${({ theme }) => theme.COLORS.CAKE_200};
    color:  ${({ theme }) => theme.COLORS.CAKE_100};
    cursor: pointer;
    justify-content: flex-end;
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
    display: flex;
    flex-direction: column;
    gap: 5px;
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