import{Container} from './styles'

import foodExplorer from "../../assets/foodExplorer.png"

export function Footer(){
    return(
        <Container>
            <img src={foodExplorer} alt="logo image" />

            <p>© 2023 - Todos os direitos reservados.</p>
        </Container>
    )
}