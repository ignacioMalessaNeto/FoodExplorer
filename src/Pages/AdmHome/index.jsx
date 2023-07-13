import { Container } from './styles';

import { HeaderAdm } from '../../Components/HeaderAdm'

import food from '../../assets/food.png';

import { useEffect, useRef, useState } from 'react';

import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

import { CardAdm } from '../../Components/CardAdm';

import { Footer } from '../../Components/Footer';

import { api } from '../../Services/api';

import { useNavigate, useParams } from 'react-router-dom';

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

    const [allDishes, setAllDishes] = useState([]);
    const [meals, setMeals] = useState();
    const [desserts, setDesserts] = useState();
    const [drinks, setDrinks] = useState();

    function filterCategories(allDishes){
        setMeals(allDishes.filter((dish) => dish.category === "meal"))
        setDesserts(allDishes.filter((dish) => dish.category === "dessert"))
        setDrinks(allDishes.filter((dish) => dish.category === "drinks"))
    }

    useEffect(() => {
        async function fecthDishs() {
            const response = await api.get("/dish");
            filterCategories(response.data);
            setAllDishes(response.data);
        }

        fecthDishs();
    }, [])

    return (
        <Container>
            <HeaderAdm />
            <img src={food} alt="" className='logo' />
            <h3>Refeições</h3>
            <div className='containerCarrosel'>
                <div className='carrosel' ref={carossel}>
                    <button className='arrowLeft' onClick={handleLeftClick}><IoIosArrowBack size={40} /></button>


                    { 
                        meals && <CardAdm data={meals} key={meals.id}/>
                    }

                    <button className='arrowright' onClick={handleRightClick}><IoIosArrowForward size={40} /></button></div>
            </div>

            <h3>Sobremesas</h3>
            <div className='containerCarrosel'>
                <div className='carrosel' ref={carosselSobremesas}>
                    <button className='arrowLeft' onClick={handleLeftClickSobremesas}><IoIosArrowBack size={40} /></button>

                    { 
                        desserts && <CardAdm data={desserts} key={desserts.id}/>
                    }

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
                        drinks && <CardAdm data={drinks} key={drinks.id}/>
                    }

                    <button className='arrowright' onClick={handleRightClickDrinks}>
                        <IoIosArrowForward size={40} />
                    </button>
                </div>
            </div>

            <Footer />
        </Container>
    )
}