import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    .logo{
        padding: 16px 0 16px 90px;
    }

    h3{
        font-size: 40px;
        color: ${({ theme }) => theme.COLORS.LIGHT_300}; 
        padding: 0px 0px 16px 123px;
    }    

    .arrowLeft{
        background: none;
        border: none;
        position: absolute;
    }
    
    .arrowright{
        background: none;
        border: none;
        position: absolute;
        right: 120px;
    }


    svg{
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }

    .containerCarrosel{
        display: flex;
        justify-content: center;
        flex-direction: column;
        padding: 16px 124px 16px 123px;
        max-width: 1350px;
    }

    .carrosel{
        width: 100%;
        display: flex;
        align-items: center;
        overflow-x: auto;
        scroll-behavior: smooth;
        gap: 27px;
        align-items: center;
    }

    .carrosel::-webkit-scrollbar{
        display: none;
    }
    
`;