import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  gap: 10%;

  input {
    padding: 16px 14px;
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
      width: 80vw;
    }
  }

  @media (max-width: 1032px) {
    flex-direction: column;

    padding: 100px 0px;
  }

  @media (max-width: 1032px) {
    flex-direction: column;
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
  max-width: 450px;
  width: 100%;
  max-height: 500px;
  height: 80%;
  border-radius: 16px;
  padding: 50px 50px 0;
  gap: 32px;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.COLORS.DARK_700};
  animation: fadeInAndStop1 1.5s forwards;

  .title-login {
    text-align: center;

    @media (max-width: 400px) {
      font-size: 6vw;
    }
  }

  .buttonLogin {
    background: ${({ theme }) => theme.COLORS.CAKE_200};
    border: none;
    padding: 12px 0;
    border-radius: 5px;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    min-width: 80px;
  }

  .buttonCreateLogin {
    text-align: center;
    border: none;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    @media (max-width: 400px) {
      font-size: 6vw;
    }
  }

  @media (max-width: 1032px) {
    padding: 30px;
    width: 90%;
  }
`;
