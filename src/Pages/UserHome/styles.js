import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 50px 5%;

  h1 {
    font-size: clamp(20px, 2vw, 35px);

    flex-wrap: nowrap;
  }
  p {
    font-size: clamp(14px, 2vw, 20px);
    font-family: "Poppins", sans-serif;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    display: flex;
    text-align: center;
    align-items: center;
    height: 462px;
  }
  h3 {
    font-size: clamp(25px, 2vw, 34px);
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    animation: fadeInAndStop 1.5s forwards;
    padding-top: 5%;
  }

  
  svg {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  .logo {
    max-width: 2500px;
    min-height: 400px;
    display: flex;
    animation: fadeInAndStop 1.5s forwards;
    background-color: ${({ theme }) => theme.COLORS.GRADIENTS_200};
    border-radius: 10px;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    gap: 5%;
    padding: 7%;
  }

  .description {
    height: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 150px;
    gap: 10px;
  }

  .imageDeskTop {
    width: 80%;
    height: 80%; /* Mantém a proporção da imagem */
    max-height: 560px;
    min-width: 300px;
    max-width: 560px;
    object-fit: cover; /* Similar ao background-size: cover */
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
      flex-direction: column;
      gap: 50px;
    }
    /* .imageDeskTop {
      width: 100%;
    } */
  }
  @media (max-width: 800px) {
    .containerCarrossel {
      padding: 16px 50px 16px 50px;
    }
    .imageDeskTop {
      /* width: 80%; */
      max-height: 400px;
    }
  }
  @media (max-width: 665px) {
    .logo {
      min-width: 350px;
    }
  }
  @media (max-width: 400px) {
    .imageDeskTop {
      max-height: 300px;
      min-width: 250px;
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
