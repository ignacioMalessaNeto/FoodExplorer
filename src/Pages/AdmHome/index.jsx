import { Container } from './styles';

import { HeaderAdm } from '../../Components/HeaderAdm'

import food from '../../assets/food.png';

import { useRef } from 'react';

import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

import { CardAdm } from '../../Components/CardAdm';

import { Footer } from '../../Components/Footer';
import { BsDatabaseFillSlash } from 'react-icons/bs';

function handleDetails({ dish_id }) {

}

export function AdmHome() {
    const carossel = useRef(null);
    const carosselSobremesas = useRef(null);
    const carosselDrinks = useRef(null);


    const handleRightClick = (e) => {
        e.preventDefault();
        const scrollWidth = carossel.current.scrollWidth;
        const containerWidth = carossel.current.offsetWidth;
        const maxScrollLeft = scrollWidth - containerWidth;
        const scrollStep = 130;
        let newScrollLeft = carossel.current.scrollLeft + scrollStep;

        if (newScrollLeft > maxScrollLeft) {
            newScrollLeft = 0;
        }

        carossel.current.scrollLeft = newScrollLeft;
    };

    const handleLeftClick = (e) => {
        e.preventDefault();
        const scrollWidth = carossel.current.scrollWidth;
        const containerWidth = carossel.current.offsetWidth;
        const maxScrollLeft = scrollWidth - containerWidth;
        const scrollStep = 130;
        let newScrollLeft = carossel.current.scrollLeft - scrollStep;

        if (newScrollLeft < 0) {
            newScrollLeft = maxScrollLeft;
        }

        carossel.current.scrollLeft = newScrollLeft;
    };

    const handleRightClickSobremesas = (e) => {
        e.preventDefault();
        const scrollWidth = carosselSobremesas.current.scrollWidth;
        const containerWidth = carosselSobremesas.current.offsetWidth;
        const maxScrollLeft = scrollWidth - containerWidth;
        const scrollStep = 130;
        let newScrollLeft = carosselSobremesas.current.scrollLeft + scrollStep;

        if (newScrollLeft > maxScrollLeft) {
            newScrollLeft = 0;
        }

        carosselSobremesas.current.scrollLeft = newScrollLeft;
    };

    const handleLeftClickSobremesas = (e) => {
        e.preventDefault();
        const scrollWidth = carosselSobremesas.current.scrollWidth;
        const containerWidth = carosselSobremesas.current.offsetWidth;
        const maxScrollLeft = scrollWidth - containerWidth;
        const scrollStep = 130;
        let newScrollLeft = carosselSobremesas.current.scrollLeft - scrollStep;

        if (newScrollLeft < 0) {
            newScrollLeft = maxScrollLeft;
        }

        carosselSobremesas.current.scrollLeft = newScrollLeft;
    };

    const handleRightClickDrinks = (e) => {
        e.preventDefault();
        const scrollWidth = carosselDrinks.current.scrollWidth;
        const containerWidth = carosselDrinks.current.offsetWidth;
        const maxScrollLeft = scrollWidth - containerWidth;
        const scrollStep = 130;
        let newScrollLeft = carosselDrinks.current.scrollLeft + scrollStep;

        if (newScrollLeft > maxScrollLeft) {
            newScrollLeft = 0;
        }

        carosselDrinks.current.scrollLeft = newScrollLeft;
    };

    const handleLeftClickDrinks = (e) => {
        e.preventDefault();
        const scrollWidth = carosselDrinks.current.scrollWidth;
        const containerWidth = carosselDrinks.current.offsetWidth;
        const maxScrollLeft = scrollWidth - containerWidth;
        const scrollStep = 130;
        let newScrollLeft = carosselDrinks.current.scrollLeft - scrollStep;

        if (newScrollLeft < 0) {
            newScrollLeft = maxScrollLeft;
        }

        carosselDrinks.current.scrollLeft = newScrollLeft;
    };


    return (
        <Container>
            <HeaderAdm />
            <img src={food} alt="" className='logo' />
            <h3>Refeições</h3>
            <div className='containerCarrosel'>
                <div className='carrosel' ref={carossel}>
                    <button className='arrowLeft' onClick={handleLeftClick}><IoIosArrowBack size={40} /></button>

                    {   
                        dishsMeal.map(dishMeal=> (
                        <CardAdm
                            key={String(dishMeal.id)}
                            data={dishMeal}
                        />
                    ))}

                    <button className='arrowright' onClick={handleRightClick}><IoIosArrowForward size={40} /></button></div>
            </div>

            <h3>Sobremesas</h3>
            <div className='containerCarrosel'>
                <div className='carrosel' ref={carosselSobremesas}>
                    <button className='arrowLeft' onClick={handleLeftClickSobremesas}><IoIosArrowBack size={40} /></button>

                    {   
                        dishsDessert.map(dishDessert => (
                        <CardAdm
                            key={String(dishDessert.id)}
                            data={dishDessert}
                        />
                    ))}

                    <button className='arrowright' onClick={handleRightClickSobremesas}>
                        <IoIosArrowForward size={40} />
                    </button>
                </div>
            </div>

            <h3>Drinks</h3>
            <div className='containerCarrosel'>
                <div className='carrosel' ref={carosselDrinks}>
                    <button className='arrowLeft' onClick={handleLeftClickDrinks}>
                        <IoIosArrowBack size={40} />
                    </button>

                     {   
                        dishsDrinks.map(dishDrink => (
                        <CardAdm
                            key={String(dishDrink.id)}
                            data={dishDrink}
                        />
                    ))}

                    <button className='arrowright' onClick={handleRightClickDrinks}>
                        <IoIosArrowForward size={40} />
                    </button>
                </div>
            </div>

            <Footer />
        </Container>
    )
}