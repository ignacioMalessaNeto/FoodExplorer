import { styled } from "styled-components";

export const Container = styled.button`
    padding: 12px 24px;
    border: none;
    background: ${({ theme }) => theme.COLORS.TOMATO_100};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    border-radius: 5px;
    height: 50px;
    width: 160px;
`;
