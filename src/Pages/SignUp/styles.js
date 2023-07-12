import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:  15px 131px 10px 131px;

    input{
        color: ${({ theme }) => theme.COLORS.LIGHT_800};
        border: 2px solid ${({ theme }) => theme.COLORS.LIGHT_800};
        background: transparent;
        border-radius: 5px;
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

`;