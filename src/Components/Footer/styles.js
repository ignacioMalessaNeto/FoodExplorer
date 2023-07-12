import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 77px;

    align-items: center;
    justify-content: space-between;
    display: flex;
    background: ${({ theme }) => theme.COLORS.DARK_600};
    padding: 0 121px;
`;