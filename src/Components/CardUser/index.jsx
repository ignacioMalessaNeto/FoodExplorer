import { Container } from './styles';
import { useState } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { AiOutlineHeart } from 'react-icons/ai';
import { IoMdArrowDropright } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { api } from '../../Services/api';
export function CardUser({ data }) {
    const [amount, setAmount ] = useState("");
    return (
        data.map(dish => (
            <Container>
                <button className='buttonHearth'><AiOutlineHeart /></button>
                <img className='imgDish' src={`${api.defaults.baseURL}/files/${dish.img_dish}`} alt="Image dish" />
                <Link className='toDetails' to={`/UserDetails/${dish.id}`}>{dish.name} <IoMdArrowDropright /></Link>
                <div className="ingredients">
                    {dish.ingredients.map((ingredient) => (
                        <span key={ingredient.id} className="ingredient">{ingredient.name}</span>
                    ))}
                </div>
                <h2>R${dish.price}</h2>
                <div className='buttonsAmount'>
                    <button className='buttonAmount' onClick={() => { setAmount(amount - 1) }}><AiOutlineMinus /></button>
                    0{amount}
                    <button className='buttonAmount' onClick={() => { setAmount(amount + 1) }}><AiOutlinePlus /></button>
                    <button className='buttonIncluse'>Incluir</button>
                </div>
            </Container>
        ))
    )
}