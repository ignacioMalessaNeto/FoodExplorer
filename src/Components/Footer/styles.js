import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 77px;

    align-items: center;
    display: flex;
    justify-content: space-between;
    background: ${({ theme }) => theme.COLORS.DARK_600};
    padding: 0 121px;

    .logo-footer {
        min-width: 80px;
        max-width: 180px;
        width: 20%;
    }

    @media (max-width: 800px){
        gap: 20px;
        padding: 0 15px;

        p{
            font-size: 10px;
        }
    }
`;