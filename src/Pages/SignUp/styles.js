import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  gap: 10%;
  overflow: hidden;

  input {
    color: ${({ theme }) => theme.COLORS.LIGHT_800};
    border: 2px solid ${({ theme }) => theme.COLORS.LIGHT_800};
    background: transparent;
    border-radius: 5px;
  }

  div {
    animation: fadeInAndStop 1.5s forwards;
  }
  .image-logo {
    @media (max-width: 400px) {
      width: 70vw;
    }
  }

  @media (max-width: 1032px) {
    flex-direction: column;
    gap: 20px;
    padding: 100px 0px;
  }

  @keyframes fadeInAndStop {
    0% {
      opacity: 0;
      transform: translateY(-20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
  @keyframes fadeInAndStop1 {
    0% {
      opacity: 0;
      transform: translateX(200px);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

export const Form = styled.form`
  border-radius: 16px;
  padding: 30px 50px;
  gap: 32px;
  display: flex;
  align-items: center;
  flex-direction: column;
  max-width: 500px;
  width: 100%;
  max-height: 600px;
  height: 100%;
  background: ${({ theme }) => theme.COLORS.DARK_700};
  animation: fadeInAndStop1 1.5s forwards;

  .buttonCreateLogin {
    background: ${({ theme }) => theme.COLORS.CAKE_200};
    border: none;
    padding: 12px 0;
    width: 70%;
    border-radius: 8px;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }
  .box-input {
    width: 100%;
  }
  .buttonLogin {
    text-align: center;
    background: none;
    border: none;
    font-size: 20px;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  @media (max-width: 1032px) {
    padding: 30px 20px;
    gap: 16px;
    width: 90%;
    height: 85%;
  }
`;
