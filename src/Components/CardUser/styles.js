import { styled } from "styled-components";


export const Container = styled.div`
    min-width: 304px;
    height: 462px;

    margin: 23px 0 48px 0;
    display: flex;
    z-index: 1;
    gap: 15px;    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: ${({ theme }) => theme.COLORS.DARK_200};
    animation: fadeInAndStop1 1.5s forwards;
    
    p{
        color: red;
    }

    .buttonIncluse{
        padding: 12px 24px;
        border-radius: 5px;
        border: none;
        background: ${({ theme }) => theme.COLORS.TOMATO_100};
        color: ${({ theme }) => theme.COLORS.LIGHT_100};

    }

    .buttonsAmount{
        display: flex;
        align-items: center;
        gap: 10px
    }

    .buttonHearth{
        background: none;
        border: none;
        margin-left: 220px;
        padding-right: 20px;
    }

    .buttonAmount {
        background: none;
        border: none;
    }

    .imgDish{
        width: 176px;
        height: 176px;
        border-radius: 50%;
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
        font-size: 35px;
        font-weight: 400;
    }

    .ingredients{
      width: 277px;

      display: flex;

      gap: 5px;

      padding: 0 20px;

     -webkit-box-orient: vertical;
     -webkit-line-clamp: 2;
      overflow: hidden;
      text-overflow: ellipsis;
      font-family: 'Poppins', sans-serif;

      span{
      font-size: 14px;
      font-weight: 400;
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
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