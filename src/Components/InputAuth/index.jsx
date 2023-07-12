import { Container } from './styles';

export function InputAuth({ ...rest}){
    return(
        <Container>
            <input {...rest}/>
        </Container>
    );
};