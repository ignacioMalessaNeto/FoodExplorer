import styled from 'styled-components'


export const Container = styled.header`
    width: 100%;
    height: 104px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background: ${({ theme }) => theme.COLORS.DARK_600};
    padding: 0 123px;
    gap: 32px;

    .buttonOrder{
        display: flex;
        align-items: center;
        padding: 16px 46.5px;
        background: ${({ theme }) => theme.COLORS.TOMATO_100};
        border: none;
        border-radius: 5px;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        font-family: 'Poppins', sans-serif;;
        gap: 10px;
    }
    
    button{
        background: none;
        border: none;
    }

    div{
        width: 500px;
        margin-top: 5px;
    }
`;