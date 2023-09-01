import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;

    background: ${({ theme, isnew}) => isnew ? `transparent` : theme.COLORS.LIGHT_800};

    color: ${({ theme }) => theme.COLORS.LIGHT_800};

    border: ${({ theme, isnew}) => isnew ? `1px dashed  ${theme.COLORS.LIGHT_800}`: "none"};


    border-radius: 10px;

    > button {
        border: none;
        background: none;
    }

    .button-delete {
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        margin-top: 3px;
    }

    .button-add {
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        margin-top: 3px;
    }


    > input {
        height: 30px;
        width: 130px;

        padding: 0 0 0 8px;
        
        color: ${({ theme, isnew}) => isnew ? theme.COLORS.LIGHT_800 : theme.COLORS.LIGHT_100};
        background: transparent;

        border: none;
        &::placeholder{
            color: ${({ theme }) => theme.COLORS.GRAY_300};
        }
    }


`;