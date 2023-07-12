import { Container } from './styles'
import exit from '../../assets/exit.svg'
import logoAdmFoodExplorer from "../../assets/logoAdmFoodExplorer.png"
import { Link } from 'react-router-dom'

import { useAuth } from '../../Hooks/auth'


import {AiOutlineSearch} from "react-icons/ai"

import { Input } from "../Input";

export function HeaderAdm(){
    const { signOut } = useAuth();

    return(
        <Container>
            <Link to='/'><img src={logoAdmFoodExplorer} alt="Logo image food explorer" /></Link>

            <div>
            <Input icon={AiOutlineSearch} placeholder="Busque por pratos ou ingredientes" /> 
            </div>

            <Link className='buttonOrder' to="/addDish">Novo Prato</Link>

            <button onClick={signOut}><img src={exit} alt="icon for exit" /></button>
        </Container>
    )
}