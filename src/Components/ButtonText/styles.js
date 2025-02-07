import { styled } from "styled-components";

export const Container = styled.button`
    padding: 12px 24px;
    border: none;
    background: ${({ theme }) => theme.COLORS.CAKE_200};
    color: ${({ theme }) => theme.COLORS.CAKE_100};
    border-radius: 5px;
    height: 50px;
    width: 160px;
`;
