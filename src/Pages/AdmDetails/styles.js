import styled from 'styled-components';

export const Container = styled.div`
    font-family: 'Poppins', sans-serif;

    .img_dish{
        width: 390px;
        height: 389px;
        border-radius: 50%;
    }

    .content{
        padding: 0px 121px 155px;
        display: flex;
        gap: 47px;
    }

    main {
        display: flex;
        flex-direction: column;
        gap: 47px;
        justify-content: center;
    }

    > h1 {
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }

    >p {
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
        font-family: 'Poppins', sans-serif;
        font-weight: 300;
    }
`;