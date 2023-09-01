import { Container } from './styles';
import { useState } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { AiOutlineHeart } from 'react-icons/ai';
import { IoMdArrowDropright } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { api } from '../../Services/api';
export function CardUser({ data }) {
    const [amounts, setAmounts] = useState({}); // Estado para armazenar quantidades individuais

    function addAmount(dishId) {
        setAmounts(prevAmounts => ({
            ...prevAmounts,
            [dishId]: (prevAmounts[dishId] || 0) + 1
        }));
    }

    function removeAmount(dishId) {
        if (amounts[dishId] > 0) {
            setAmounts(prevAmounts => ({
                ...prevAmounts,
                [dishId]: prevAmounts[dishId] - 1
            }));
        }
    }

    return (
        data.map(dish => (
            <Container key={dish.id}>
                <button className='buttonHearth'><AiOutlineHeart /></button>
                <img className='imgDish' src={`${api.defaults.baseURL}/files/${dish.img_dish}`} alt="Image dish" />
                <Link className='toDetails' to={`/UserDetails/${dish.id}`}>{dish.name} <IoMdArrowDropright /></Link>
                <div className="ingredients">
                    <div className="ingredients">{dish.description}</div>
                </div>
                <h2>R${dish.price}</h2>
                <div className='buttonsAmount'>
                    <button className='buttonAmount' onClick={() => removeAmount(dish.id)}><AiOutlineMinus /></button>
                    <span className='amount'>{amounts[dish.id] || 0}</span>
                    <button className='buttonAmount' onClick={() => addAmount(dish.id)}><AiOutlinePlus /></button>
                    <button className='buttonIncluse'>Incluir</button>
                </div>
            </Container>
        ))
    )
}