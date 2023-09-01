import styled from "styled-components";

export const Container = styled.div`
    max-width: 100%;
    display: flex;
    align-items: center;

    background-color: ${({ theme }) => theme.COLORS.DARK_900};
    color: ${({ theme }) => theme.COLORS.LIGHT_700};

    border-radius: 10px;

    > input {
        height: 56px;
        width: 581px;

        padding: 12px 120px 12px 0;

        color: ${({ theme }) => theme.COLORS.LIGHT_600};

        background: transparent;
        border: 0;

        &:placeholder{
            color: ${({ theme }) => theme.COLORS.LIGHT_500};
        }

        
    }

    > svg {
        margin: 0 8px 0 95.5px;
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
    }

    @media (max-width: 1300px){
        max-width: 400px;

        input {
            max-width: 581px;
            padding: 0;
        }
    }
`;

