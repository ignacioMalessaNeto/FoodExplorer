import { styled } from "styled-components";



export const Container = styled.div`
    width: 277px;
    height: 462px;

    flex: none;
    margin: 23px 0 48px 0;

    gap: 10px;    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: ${({ theme }) => theme.COLORS.DARK_200};

    .buttonsAmount{
        display: flex;
        align-items: center;
        gap: 10px
    }

    .buttonPencil{
        background: none;
        border: none;
        margin-left: 190px;
    }

    .imgDish{
        width: 176px;
        height: 176px;
        border-radius: 50%;
    }

    .buttonAmount {
        background: none;
        border: none;
    }
    svg{
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
        font-size: 20px;
    }

    .toDetails{
        font-family: 'Poppins', sans-serif;
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
        font-size: 20px;
        display: flex;
        align-items: center;
    }

    h2{
        color: ${({ theme }) => theme.COLORS.CAKE_100};
        font-weight: 400;
        font-size: 35px;
    }

    p{
      font-size: 14px;
      font-weight: 400;
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
    }
`;