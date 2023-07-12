import { Container } from './styles';

import { HeaderUser } from '../../Components/HeaderUser'

import food from '../../assets/food.png';

import { useRef } from 'react';

import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

import { CardUser } from '../../Components/CardUser';

import { Footer } from '../../Components/Footer';

export function UserHome() {
    const carossel = useRef(null);
    const carosselSobremesas = useRef(null);
    const carosselDrinks = useRef(null);

    const handleRightClick = (e) => {
        e.preventDefault();
        const scrollWidth = carossel.current.scrollWidth;
        const containerWidth = carossel.current.offsetWidth;
        const maxScrollLeft = scrollWidth - containerWidth;
        const scrollStep = 150;
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
        const scrollStep = 150;
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
        const scrollStep = 150;
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
        const scrollStep = 150;
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
        const scrollStep = 150;
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
        const scrollStep = 150;
        let newScrollLeft = carosselDrinks.current.scrollLeft - scrollStep;

        if (newScrollLeft < 0) {
            newScrollLeft = maxScrollLeft;
        }

        carosselDrinks.current.scrollLeft = newScrollLeft;
    };

    return (
        <Container>
            <HeaderUser />
            <img src={food} alt="" className='logo' />
            <h3>Refeições</h3>
            <div className='containerCarrosel'>
                <div className='carrosel' ref={carossel}>
                    <button className='arrowLeft' onClick={handleLeftClick}><IoIosArrowBack size={40} /></button>

                    <CardUser
                        name="Bananada com"
                        ingredients="banana, sugar"
                        price={25}
                        dish_img="https://github.com/ignacioMalessaNeto.png"
                    />

                    <CardUser
                        name="Bananada"
                        ingredients="banana, sugar"
                        price={25}
                        dish_img="https://github.com/ignacioMalessaNeto.png"
                    />

                    <CardUser
                        name="Bananada"
                        ingredients="banana, sugar"
                        price={25}
                        dish_img="https://github.com/ignacioMalessaNeto.png"
                    />

                    <CardUser
                        name="Bananada"
                        ingredients="banana, sugar"
                        price={25}
                        dish_img="https://github.com/ignacioMalessaNeto.png"
                    />

                    <CardUser
                        name="Bananada"
                        ingredients="banana, sugar"
                        price={25}
                        dish_img="https://github.com/ignacioMalessaNeto.png"
                    />

                    <button className='arrowright' onClick={handleRightClick}><IoIosArrowForward size={40} /></button>
                </div>
            </div>
            <h3>Sobremesas</h3>
            <div className='containerCarrosel'>
                <div className='carrosel' ref={carosselSobremesas}>
                    <button className='arrowLeft' onClick={handleLeftClickSobremesas}><IoIosArrowBack size={40} /></button>

                    <CardUser
                        name="Bananada com"
                        ingredients="banana, sugar"
                        price={25}
                        dish_img="https://github.com/ignacioMalessaNeto.png"
                    />

                    <CardUser
                        name="Bananada"
                        ingredients="banana, sugar"
                        price={25}
                        dish_img="https://github.com/ignacioMalessaNeto.png"

                    />

                    <CardUser
                        name="Bananada"
                        ingredients="banana, sugar"
                        price={25}
                        dish_img="https://github.com/ignacioMalessaNeto.png"

                    />
                     <CardUser
                        name="Bananada"
                        ingredients="banana, sugar"
                        price={25}
                        dish_img="https://github.com/ignacioMalessaNeto.png"

                    />
                     <CardUser
                        name="Bananada"
                        ingredients="banana, sugar"
                        price={25}
                        dish_img="https://github.com/ignacioMalessaNeto.png"

                    />
                    <button className='arrowright' onClick={handleRightClickSobremesas}><IoIosArrowForward size={40} /></button>
                </div>
            </div>

            <h3>Drinks</h3>
            <div className='containerCarrosel'>
                <div className='carrosel'ref={carosselDrinks}>
                    <button className='arrowLeft' onClick={handleLeftClickDrinks}><IoIosArrowBack size={40} /></button>


                    <CardUser
                        name="Bananada"
                        ingredients="banana, sugar"
                        price={25}
                        dish_img="https://github.com/ignacioMalessaNeto.png"
                    />

                    <CardUser
                        name="Bananada"
                        ingredients="banana, sugar"
                        price={25}
                        dish_img="https://github.com/ignacioMalessaNeto.png"
                    />
                    <CardUser
                        name="Bananada"
                        ingredients="banana, sugar"
                        price={25}
                        dish_img="https://github.com/ignacioMalessaNeto.png"
                    />
                    <CardUser
                        name="Bananada"
                        ingredients="banana, sugar"
                        price={25}
                        dish_img="https://github.com/ignacioMalessaNeto.png"
                    />
                    <CardUser
                        name="Bananada"
                        ingredients="banana, sugar"
                        price={25}
                        dish_img="https://github.com/ignacioMalessaNeto.png"
                    />

                    <button className='arrowright' onClick={handleRightClickDrinks}><IoIosArrowForward size={40} /></button>
                </div>
            </div>
            <Footer />
        </Container>
    )
}