import { Container } from './styles';
import { useState } from 'react';
import { PiPencilSimpleDuotone } from 'react-icons/pi';
import { IoMdArrowDropright } from 'react-icons/io';
import { Link } from 'react-router-dom';

export function CardAdm({data, ...rest }) {
    return (
        <Container {...rest}>
            <button  className='buttonPencil'><Link to="/updateDish"><PiPencilSimpleDuotone/></Link></button>
            <img className='imgDish' src={data.dish_img} alt="Image dish"/>
            <Link className='toDetails' to="/admDetails">{data.name} <IoMdArrowDropright/></Link>
            <p>
                {data.description}
            </p>
            <h2>R$ {data.price},00 </h2>
        </Container>
    )
}