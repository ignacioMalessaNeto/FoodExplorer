import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding:  10% 131px 10px 131px;
  overflow: hidden;
  gap: 50px;

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

  .image-logo{
    @media (max-width: 400px) {
      width: 50vw;
    }
  }

  .title-login {
    text-align: center;

    @media (max-width: 400px) {
      font-size: 6vw;
    }
  }

  .buttonLogin {
    background: ${({ theme }) => theme.COLORS.TOMATO_100};
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
    flex-direction: column;

    padding: 100px  0px;
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
  border-radius: 16px;
  padding: 50px 50px 0;
  gap: 32px;
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 55vh;
  background: ${({ theme }) => theme.COLORS.DARK_700};
  animation: fadeInAndStop1 1.5s forwards;
  @media (max-width: 1032px) {
    padding: 20px;
    width: 70vw;
  }
`;
