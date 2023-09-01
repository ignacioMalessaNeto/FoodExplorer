import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:  10px 131px 10px 131px;
    overflow: hidden;

    input{
        color: ${({ theme }) => theme.COLORS.LIGHT_800};
        border: 2px solid ${({ theme }) => theme.COLORS.LIGHT_800};
        background: transparent;
        border-radius: 5px;
    }

    div{
        animation: fadeInAndStop 1.5s forwards;
    }

    .buttonCreateLogin{
        background: ${({ theme }) => theme.COLORS.TOMATO_100};
        border: none;
        padding: 12px 0;
        border-radius: 5px;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }

    .buttonLogin{
        margin-left: 100px;
        width: 150px;
        background: none;
        border: none;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }

    @media (max-width: 1032px){
        flex-direction: column;
        gap: 20px;
        padding:  200px 131px 0 131px;
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
    padding: 64px;
    gap: 32px;
    display: flex;
    flex-direction: column;
    width: 476px;
    height: 631px;
    background: ${({ theme }) => theme.COLORS.DARK_700};
    animation: fadeInAndStop1 1.5s forwards;
    @media (max-width: 1032px){
        background: none;        
    }
`;