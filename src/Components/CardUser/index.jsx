import { Container } from './styles';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { useState } from 'react';
import {AiOutlineHeart } from 'react-icons/ai';
import { IoMdArrowDropright } from 'react-icons/io';
import { Link } from 'react-router-dom';

export function CardUser({dish_img, name, ingredients, price, ...rest }) {
    const [amount, setAmount] = useState(1);


    return (
        <Container {...rest} to="/UserDetails">
            <button className='buttonHearth'><AiOutlineHeart/></button>
            <img className='imgDish' src={dish_img} alt="Image dish"/>
            <Link className='toDetails' to="/UserDetails">{name} <IoMdArrowDropright/></Link>
            <p>{ingredients}</p>
            <h2>R${price},00 </h2>
            <div className='buttonsAmount'>
                <button className='buttonAmount' onClick={() => { setAmount(amount - 1) }}><AiOutlineMinus /></button>
                0{amount}
                <button className='buttonAmount' onClick={() => { setAmount(amount + 1) }}><AiOutlinePlus /></button>
                <button className='buttonIncluse'>Incluir</button>
            </div>
        </Container>
    )
}