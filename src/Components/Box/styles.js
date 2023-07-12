import { styled } from "styled-components";

export const Container = styled.div`
    gap: 16px;
    display: flex;
    flex-direction: column;
    color: ${({ theme }) => theme.COLORS.LIGHT_400}; 
`;
