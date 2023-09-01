import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const Container = styled(Link)`
    font-size: 20px;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-family: 'Poppins', sans-serif;
    font-weight: 300;
    background: none;
    border: none;
    display: flex;
    align-items: center;
    margin: 32px 0 42px 121px;

    &:disabled{
        opacity: 0.5;
    }

    @media(max-width: 950px){
        margin: 32px 0 42px 40px;
    }

`;
