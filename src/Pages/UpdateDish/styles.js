import styled from 'styled-components';


export const Container = styled.div`

 h1{
    padding: 0 123px  23px;
 }

 main{
    padding: 0 123px 116px ;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 32px;
 }

 .positionButton{
    width: 100%;
    display: flex;
    justify-content: end;
    gap: 20px;
 }

 .buttonDelete{
    background: ${({ theme }) => theme.COLORS.DARK_800};

    border: none;
    padding: 12px 24px;
    border-radius: 5px;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
 }


 .buttonCreate{
    background: ${({ theme }) => theme.COLORS.TOMATO_400};
    border: none;
    padding: 12px 24px;
    border-radius: 5px;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
 }

.inputPrice{
    height: 44px;

        width: 168px;

        border-radius: 5px;

        

        padding: 12px;

        color: ${({ theme }) => theme.COLORS.LIGHT_400};

        background: ${({ theme }) => theme.COLORS.DARK_800};
        border: 0;

        &:placeholder{
            color: ${({ theme }) => theme.COLORS.LIGHT_500};
        }
}

 .inputName {
        height: 44px;

        width: 477px;

        border-radius: 5px;

        

        padding: 12px;

        color: ${({ theme }) => theme.COLORS.LIGHT_400};

        background: ${({ theme }) => theme.COLORS.DARK_800};
        border: 0;

        &:placeholder{
            color: ${({ theme }) => theme.COLORS.LIGHT_500};
        }

        
    }



    @media(max-width: 950px){
        
        h1{
            padding: 0 20px  23px;
        }

        main{
            padding: 0 20px 116px ;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            gap: 32px;
        }

        .inputName {
            max-width: 330px;
        }

        .inputPrice{
            width: 330px;
        }
    }
`

export const ImageDish = styled.div`
    display: flex;
    flex-direction: column;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    gap: 16px;
    
    > label:nth-child(2){
    width: 229px;
    height: 44px;
    border-radius: 5px;
    gap: 10px;
    background-color: ${({ theme }) => theme.COLORS.DARK_800};

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;

    input {
    display: none;
    }

    svg{
        font-size: 30px;
    }

}
`

export const OptionDish = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};

    select{
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
        cursor: pointer;
        border-radius: 5px;
        padding: 13px 16px;
        width: 333px;
        background-color: ${({ theme }) => theme.COLORS.DARK_800};
        border: none;
    }
`;

export const Box = styled.div`
    gap: 16px;
    display: flex;
    flex-direction: column;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    
`;

export const SectionIngredients = styled.div`
    background-color: ${({ theme }) => theme.COLORS.DARK_800};
    gap: 10px;
    width: 900px;
    height: 44px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    @media(max-width: 965px){
        width: 85%;
        flex-wrap: wrap;
        height: 88px;

    }
`;