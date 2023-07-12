import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;

    background-color: transparent;
    color: ${({ theme }) => theme.COLORS.LIGHT_700};
    
    > input {
        width: 100%;
        padding: 16px 14px;
        color: ${({ theme }) => theme.COLORS.LIGHT_800};
        border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_800};
        background: transparent;
        border-radius: 5px;
    }

`;

