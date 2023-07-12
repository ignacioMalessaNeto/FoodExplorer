import styled from "styled-components";

export const Container = styled.span`
    font-size: 12px;
    font-family: 'Poppins', sans-serif;
    padding: 5px 14px;
    border-radius: 5px;
    margin-right: 6px;
    color: ${({ theme }) => theme.COLORS.LIGTH_100};
    background-color: ${({ theme }) => theme.COLORS.DARK_1000};
`