import { Container } from './styles';
import { PiPencilSimpleDuotone } from 'react-icons/pi';
import { IoMdArrowDropright } from 'react-icons/io';
import { Link } from 'react-router-dom';

import { api } from '../../Services/api';

export function CardAdm({ data }) {
    return (
        data.map(dish => (
            <Container key={dish.id}>
                <button className='buttonPencil'><Link to={`/updateDish/${dish.id}`}><PiPencilSimpleDuotone /></Link></button>
                <img className='imgDish' src={`${api.defaults.baseURL}/files/${dish.img_dish}`} alt="Image dish" />
                <Link className='toDetails' to={`admDetails/${dish.id}`}>{dish.name}<IoMdArrowDropright /></Link>
                <div className="ingredients">
                    {dish.ingredients.map((ingredient) => (
                        <span key={ingredient.id} className="ingredient">{ingredient.name}</span>
                    ))}
                </div>
                <h2>R${dish.price} </h2>
            </Container>
        ))
    )
}

