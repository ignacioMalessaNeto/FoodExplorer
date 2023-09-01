import styled from "styled-components";

export const Container = styled.div`
    width: 100%;

    .imageMobile{
        display: none;
    }
    
    .logo{
        max-width: 1120px;
        display: flex;
        margin: 16px 90px 16px 90px;
        animation: fadeInAndStop 1.5s forwards;
        background-color: ${({ theme }) => theme.COLORS.GRADIENTS_200};
        border-radius: 10px;
    }

    .descrip{
        display: flex;
        flex-direction: column;
        align-items: center;

        margin-top: 150px;
    }

    .text{
        height: 80px;
        max-width: 422px;
    }

    h3{
        font-size: 40px;
        color: ${({ theme }) => theme.COLORS.LIGHT_300}; 
        padding: 0px 0px 16px 123px;
        animation: fadeInAndStop 1.5s forwards;
    }    

    p{
        font-family: 'Poppins', sans-serif;
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
        font-size: 20px;
        display: flex;
        text-align: center;
        align-items: center;
        height: 462px;
    }

    .arrowLeft{
        background: none;
        border: none;
        position: absolute;
        display: flex;
        z-index: 2;
        left: 120px;
        animation: fadeInAndStop 1.5s forwards;
    }
    
    .arrowright{
        background: none;
        border: none;
        position: absolute;
        display: flex;
        z-index: 2;
        right: 120px;
        animation: fadeInAndStop 1.5s forwards;
    }


    svg{
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }

    .containerCarrosel{
        display: flex;
        justify-content: center;
        flex-direction: column;
        padding: 16px 124px 16px 123px;
        max-width: 1400px;
        animation: fadeInAndStop 1.5s forwards;
    }


    .carrosel{
        width: 100%;
        display: flex;
        align-items: center;
        overflow-x: auto;
        scroll-behavior: smooth;
        gap: 27px;
        align-items: center;
        justify-content: center;
    }
    

    .carrosel::-webkit-scrollbar{
        display: none;
    }

    @media (max-width: 665px){
        .logo{
            min-width: 376px;
            margin: 16px 40px 16px 40px;
        }
        .text{
            font-size: 12px;
        }
    }


    @media (max-width: 800px){
        .containerCarrosel{
        padding: 16px 50px 16px 50px;
    }
    }

    @media (max-width: 1150px){
        .imageDesckTop{
            display: none;
        }

        .imageMobile{
        display: flex;
        }

        .logo{
            justify-content: space-around;
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