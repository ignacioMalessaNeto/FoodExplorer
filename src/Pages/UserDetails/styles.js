import styled from 'styled-components';

export const Container = styled.div`
    font-family: 'Poppins', sans-serif;
    
    
    .img_dish{
        width: 390px;
        height: 389px;
        border-radius: 50%;
        animation: fadeInAndStop 1.5s forwards;
    }

    .content{
        display: flex;
        gap: 47px;
        padding: 0px 121px 155px;
        animation: fadeInAndStop 1.5s forwards;
    }

    .buttonsAmount{
        display: flex;
        align-items: center;
        gap: 10px
    }
    .buttonAmount {
        background: none;
        border: none;
    }

    main {
        display: flex;
        flex-direction: column;
        gap: 47px;
        justify-content: center;
    }

    > h1 {
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }

    >p {
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
        font-family: 'Poppins', sans-serif;
        font-weight: 300;
    }
    
    svg{
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
        font-size: 20px;
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

    @media (max-width: 990px){
        .content{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        }
        main {
        align-items: center;
        justify-content: center;

        .img_dish{
        width: 264px;
        height: 264px;
        border-radius: 50%;
        animation: fadeInAndStop 1.5s forwards;
    }
    }
    }

`;