import { Container } from "./styles";
import { CardUser } from "../../Components/CardUser";
import { api } from "../../Services/api";
import { useRef, useState, useEffect } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import PropTypes from "prop-types";

export function UserHome({ searchQuery }) {
  const carrossel = useRef(null);
  const carrosselSobremesas = useRef(null);
  const carrosselDrinks = useRef(null);
  // eslint-disable-next-line no-unused-vars
  const [allDishes, setAllDishes] = useState([]);
  // const [searchDish, setSearchDish] = useState([]);
  const [meals, setMeals] = useState();
  const [desserts, setDesserts] = useState();
  const [drinks, setDrinks] = useState();

  const handleRightClick = (e) => {
    e.preventDefault();
    const scrollWidth = carrossel.current.scrollWidth;
    const containerWidth = carrossel.current.offsetWidth;
    const maxScrollLeft = scrollWidth - containerWidth;
    const scrollStep = 150;
    let newScrollLeft = carrossel.current.scrollLeft + scrollStep;

    if (newScrollLeft > maxScrollLeft) {
      newScrollLeft = 0;
    }

    carrossel.current.scrollLeft = newScrollLeft;
  };

  const handleLeftClick = (e) => {
    e.preventDefault();
    const scrollWidth = carrossel.current.scrollWidth;
    const containerWidth = carrossel.current.offsetWidth;
    const maxScrollLeft = scrollWidth - containerWidth;
    const scrollStep = 150;
    let newScrollLeft = carrossel.current.scrollLeft - scrollStep;

    if (newScrollLeft < 0) {
      newScrollLeft = maxScrollLeft;
    }

    carrossel.current.scrollLeft = newScrollLeft;
  };

  const handleRightClickSobremesas = (e) => {
    e.preventDefault();
    const scrollWidth = carrosselSobremesas.current.scrollWidth;
    const containerWidth = carrosselSobremesas.current.offsetWidth;
    const maxScrollLeft = scrollWidth - containerWidth;
    const scrollStep = 150;
    let newScrollLeft = carrosselSobremesas.current.scrollLeft + scrollStep;

    if (newScrollLeft > maxScrollLeft) {
      newScrollLeft = 0;
    }

    carrosselSobremesas.current.scrollLeft = newScrollLeft;
  };

  const handleLeftClickSobremesas = (e) => {
    e.preventDefault();
    const scrollWidth = carrosselSobremesas.current.scrollWidth;
    const containerWidth = carrosselSobremesas.current.offsetWidth;
    const maxScrollLeft = scrollWidth - containerWidth;
    const scrollStep = 150;
    let newScrollLeft = carrosselSobremesas.current.scrollLeft - scrollStep;

    if (newScrollLeft < 0) {
      newScrollLeft = maxScrollLeft;
    }

    carrosselSobremesas.current.scrollLeft = newScrollLeft;
  };

  const handleRightClickDrinks = (e) => {
    e.preventDefault();
    const scrollWidth = carrosselDrinks.current.scrollWidth;
    const containerWidth = carrosselDrinks.current.offsetWidth;
    const maxScrollLeft = scrollWidth - containerWidth;
    const scrollStep = 150;
    let newScrollLeft = carrosselDrinks.current.scrollLeft + scrollStep;

    if (newScrollLeft > maxScrollLeft) {
      newScrollLeft = 0;
    }

    carrosselDrinks.current.scrollLeft = newScrollLeft;
  };

  const handleLeftClickDrinks = (e) => {
    e.preventDefault();
    const scrollWidth = carrosselDrinks.current.scrollWidth;
    const containerWidth = carrosselDrinks.current.offsetWidth;
    const maxScrollLeft = scrollWidth - containerWidth;
    const scrollStep = 150;
    let newScrollLeft = carrosselDrinks.current.scrollLeft - scrollStep;

    if (newScrollLeft < 0) {
      newScrollLeft = maxScrollLeft;
    }

    carrosselDrinks.current.scrollLeft = newScrollLeft;
  };

  function filterCategories(searchDish) {
    setMeals(searchDish.filter((dish) => dish.category === "meal"));
    setDesserts(searchDish.filter((dish) => dish.category === "dessert"));
    setDrinks(searchDish.filter((dish) => dish.category === "drinks"));
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

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    fetchDishesByParam(searchQuery);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);

  return (
    <Container>
      <div className="logo">
        {/* biome-ignore lint/a11y/useAltText: <explanation> */}
        <img className="imageDeskTop" src="../../../src/assets/logoHome.png" />
        <div className="description">
          <h1>Sabores espetaculares</h1>
          <p className="text">
            Sinta o cuidado do preparo com ingredientes selecionados.
          </p>
        </div>
      </div>
      <h3>Refeições</h3>
      <div className="containerCarrossel">
        <div className="carrossel" ref={carrossel}>
          <button className="arrowLeft" onClick={handleLeftClick} type="button">
            <IoIosArrowBack size={40} />
          </button>
          {meals && meals.length > 0 ? (
            <CardUser data={meals} key={meals.id} />
          ) : (
            <p>Nenhum prato cadastrado ainda.</p>
          )}
          <button
            className="arrowRight"
            onClick={handleRightClick}
            type="button"
          >
            <IoIosArrowForward size={40} />
          </button>
        </div>
      </div>
      <h3>Sobremesas</h3>
      <div className="containerCarrossel">
        <div className="carrossel" ref={carrosselSobremesas}>
          <button
            className="arrowLeft"
            onClick={handleLeftClickSobremesas}
            type="button"
          >
            <IoIosArrowBack size={40} />
          </button>
          {desserts && desserts.length > 0 ? (
            <CardUser data={desserts} key={desserts.id} />
          ) : (
            <p>Nenhum prato cadastrado ainda.</p>
          )}
          <button
            className="arrowRight"
            onClick={handleRightClickSobremesas}
            type="button"
          >
            <IoIosArrowForward size={40} />
          </button>
        </div>
      </div>

      <h3>Drinks</h3>
      <div className="containerCarrossel">
        <div className="carrossel" ref={carrosselDrinks}>
          <button
            className="arrowLeft"
            onClick={handleLeftClickDrinks}
            type="button"
          >
            <IoIosArrowBack size={40} />
          </button>
          {drinks && drinks.length > 0 ? (
            <CardUser data={drinks} key={drinks.id} />
          ) : (
            <p>Nenhum prato cadastrado ainda.</p>
          )}
          <button
            className="arrowRight"
            onClick={handleRightClickDrinks}
            type="button"
          >
            <IoIosArrowForward size={40} />
          </button>
        </div>
      </div>
    </Container>
  );
}
UserHome.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  searchType: PropTypes.string.isRequired,
};
