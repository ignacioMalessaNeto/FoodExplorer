import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  padding: 50px 5%;

  h1{
    font-size: clamp(15px, 4vw, 40px);
  }

  h3 {
    font-size: clamp(25px, 6vw, 40px);
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    animation: fadeInAndStop 1.5s forwards;
    padding-top: 5%;
  }

  p {
    font-family: "Poppins", sans-serif;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    display: flex;
    text-align: center;
    align-items: center;
    font-size: clamp(8px, 3vw, 24px);
    height: 462px;
  }
  svg {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }
   

  .logo {
    flex-wrap: wrap;
    max-width: 1100px;
    min-height: 450px;
    display: flex;
    animation: fadeInAndStop 1.5s forwards;
    background-color: ${({ theme }) => theme.COLORS.GRADIENTS_200};
    border-radius: 10px;
    margin: 0 auto;
    align-items: center;
    padding: 5%;
  }

  .description {
    height: 80px;
    max-width: 422px;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 150px;
  }

  .imageDeskTop {
    width: 50%;
    height: 250px;
    min-width: 150px;
    background-image: url("/src/assets/logoHome.png");
    background-size: cover;
    background-position: 50%;
  }

  .arrowLeft {
    background: none;
    border: none;
    position: absolute;
    display: flex;
    z-index: 2;
    left: 5%;
    animation: fadeInAndStop 1.5s forwards;
  }

  .arrowRight {
    background: none;
    border: none;
    position: absolute;
    display: flex;
    z-index: 2;
    right: 5%;
    animation: fadeInAndStop 1.5s forwards;
  }
  .containerCarrossel {
    display: flex;
    justify-content: center;
    flex-direction: column;
    max-width: 1400px;
    min-width: 300px;
    animation: fadeInAndStop 1.5s forwards;
  }

  .carrossel {
    width: 100%;
    display: flex;
    align-items: center;
    overflow-x: auto;
    scroll-behavior: smooth;
    gap: 27px;
    align-items: center;
    justify-content: center;
  }

  .carrossel::-webkit-scrollbar {
    display: none;
  }
  
  @media (max-width: 1150px) {
    .logo {
      max-width: 600px;
      justify-content: space-around;
    }
    .imageDeskTop{
        width: 100%;
    }
  }
  @media (max-width: 800px) {
    .containerCarrossel {
      padding: 16px 50px 16px 50px;
    }
  }
  @media (max-width: 665px) {
    .logo {
      min-width: 350px;
    }
  }
  @media (max-width: 350px) {
    .imageDeskTop{
        min-width: 180px;
    }
    .logo {
      min-width: 200px;
    }
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
`;
