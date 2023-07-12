import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:  65px 131px 0 131px;
  
    input{
        padding: 16px 14px;
        color: ${({ theme }) => theme.COLORS.LIGHT_800};
        border: 2px solid ${({ theme }) => theme.COLORS.LIGHT_800};
        background: transparent;
        border-radius: 5px;
    }

    .buttonLogin{
        background: ${({ theme }) => theme.COLORS.TOMATO_100};
        border: none;
        padding: 12px 0;
        border-radius: 5px;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }

    .buttonCreateLogin{
        margin-left: 110px;
        width: 120px;
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
    height: 540px;
    background: ${({ theme }) => theme.COLORS.DARK_700};

`;