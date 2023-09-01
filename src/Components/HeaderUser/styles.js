import styled from 'styled-components'
export const Container = styled.header`
    width: 100%;
    height: 104px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background: ${({ theme }) => theme.COLORS.DARK_600};
    padding: 0 123px;
    gap: 32px;

    .buttonOrder{
        display: flex;
        align-items: center;
        padding: 16px 46.5px;
        background: ${({ theme }) => theme.COLORS.TOMATO_100};
        border: none;
        border-radius: 5px;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        font-family: 'Poppins', sans-serif;
        gap: 10px;
    }
    .order{
        display:  none;
    }
    
    .divider {
        display: flex;
    }
    

    
    button{
        background: none;
        border: none;
    }

    div{
        width: 500px;
        margin-top: 5px;
    }


    label {
        display: flex;
        gap: 5px;
        font-family: 'Poppins', sans-serif;
    }
    .labels {
        display: flex;
        flex-direction: column;
        gap: 5px;
    }

    @media (max-width: 1300px){
    padding: 0 80px 0 80px;
    
    .heading{
        max-width: 400px;
    }
        
    .buttonOrder{
        display: none;
    }
    
    .order{
        display:  flex;
    }
    }

    @media (max-width: 800px){
    padding: 0 80px 0 80px;
    
    .labels{
        display: none;
    }

    .heading{
        max-width: 400px;
    }
        
    .buttonOrder{
        display: none;
    }
    
    .order{
        display:  flex;
    }

    }
`;

export const Labels1 = styled.div`
    display: none; 
    @media (max-width: 800px){
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    
`;