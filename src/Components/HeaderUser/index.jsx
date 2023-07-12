import { Container } from './styles'
import { useAuth } from '../../Hooks/auth'

import  order  from '../../assets/order.svg'
import exit from '../../assets/exit.svg'
import logoFoodExplorer from "../../assets/logoFoodExplorer.png"


import {AiOutlineSearch} from "react-icons/ai"

import { Link } from 'react-router-dom'

import { Input } from "../Input";

export function HeaderUser(){
    const { signOut } = useAuth();

    return(
        <Container>
            <Link to='/'><img src={logoFoodExplorer} alt="Logo image food explorer" /></Link>

            <div>
            <Input icon={AiOutlineSearch} placeholder="Busque por pratos ou ingredientes" /> 
            </div>

            <button className='buttonOrder'> <img src={order} alt="order image" /> Pedidos (0)</button>

            <button onClick={signOut}><img src={exit} alt="icon for exit" /></button>
        </Container>
    )
}