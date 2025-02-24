import { Container } from './styles';

import { useEffect, useRef, useState } from 'react';

import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

import { CardAdm } from '../../Components/CardAdm';

import { api } from '../../Services/api';

import logoHome from '../../assets/logoHome.png';


export function AdmHome({ searchQuery }) {
    const carossel = useRef(null);
    const carosselSobremesas = useRef(null);
    const carosselDrinks = useRef(null);
    const [allDishes, setAllDishes] = useState([]);
    const[searchDish, setSearchDish] = useState([]);
    const [meals, setMeals] = useState();
    const [desserts, setDesserts] = useState();
    const [drinks, setDrinks] = useState();
    

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

    function filterCategories(searchDish) {
        setMeals(searchDish.filter((dish) => dish.category === "meal"))
        setDesserts(searchDish.filter((dish) => dish.category === "dessert"))
        setDrinks(searchDish.filter((dish) => dish.category === "drinks"))
    }

    async function fetchDishesByParam(param) {
        try {
            const endpoint = param ? `/dish?name=${param}` : '/dish';
            const response = await api.get(endpoint);
            filterCategories(response.data);
            setAllDishes(response.data);
          } catch (error) {
            console.error("Error fetching dishes:", error);
          }
    }

    useEffect(() => {
        fetchDishesByParam(searchQuery);
    }, [searchQuery]);
    
    return (
        <Container>
            <div className='logo'>
                <img className='imageDesckTop' src={logoHome} alt="Image logo" />
                <img className='imageMobile' src={logoHome} alt="Image logo" />

                <div className='descrip'>
                <h1>Sabores inigualáveis</h1>
                <p className='text'>Sinta o cuidado do preparo com ingredientes selecionados.</p>
                </div>
            </div>
            <h3>Refeições</h3>
            <div className='containerCarrosel'>
                <div className='carrosel' ref={carossel}>
                    <button className='arrowLeft' onClick={handleLeftClick}><IoIosArrowBack size={40} /></button>

                    {meals && meals.length > 0 ? (
                        <CardAdm data={meals} key={meals.id} />
                    ) : (
                        <p>Nenhum prato cadastrado ainda.</p>
                    )}

                    <button className='arrowright' onClick={handleRightClick}><IoIosArrowForward size={40} /></button></div>
            </div>

            <h3>Sobremesas</h3>
            <div className='containerCarrosel'>
                <div className='carrosel' ref={carosselSobremesas}>
                    <button className='arrowLeft' onClick={handleLeftClickSobremesas}><IoIosArrowBack size={40} /></button>

                    {desserts && desserts.length > 0 ? (
                        <CardAdm data={desserts} key={desserts.id} />
                    ) : (
                        <p>Nenhum prato cadastrado ainda.</p>
                    )}

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

                    {drinks && drinks.length > 0 ? (
                        <CardAdm data={drinks} key={drinks.id} />
                    ) : (
                        <p>Nenhum prato cadastrado ainda.</p>
                    )}
                    <button className='arrowright' onClick={handleRightClickDrinks}>
                        <IoIosArrowForward size={40} />
                    </button>
                </div>
            </div>
        </Container>
    )
}

