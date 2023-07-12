import{Container} from './styles';

import {IoIosArrowBack} from 'react-icons/io';

export function Button(){
    return(
        <Container  to="/" type="button">
            <IoIosArrowBack/>Voltar
        </Container>
    )
}