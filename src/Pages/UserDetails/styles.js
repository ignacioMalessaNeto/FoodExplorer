import styled from 'styled-components';

export const Container = styled.div`
    font-family: 'Poppins', sans-serif;


    .content{
        display: flex;
        gap: 47px;
        padding: 0px 121px 155px;
    }

    .buttonsAmount{
        display: flex;
        align-items: center;
        gap: 10px
    }

    main {
        display: flex;
        flex-direction: column;
        gap: 40px;
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
    .buttonAmount {
        background: none;
        border: none;
    }
    svg{
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
        font-size: 20px;
    }
`;