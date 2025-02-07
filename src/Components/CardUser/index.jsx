import { Container } from "./styles";
import { useContext, useEffect, useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { FaHeart } from "react-icons/fa";
import { IoMdArrowDropright } from "react-icons/io";
import { Link } from "react-router-dom";
import { api } from "../../Services/api";
import { DishContext } from "../../Hooks/dishContext";

export function CardUser({ data }) {
  const [amounts, setAmounts] = useState({});
  const [favorite, setFavorite] = useState([]);
  const { setCountDish } = useContext(DishContext);

  function addAmount(dishId) {
    setAmounts((prevAmounts) => ({
      ...prevAmounts,
      [dishId]: (prevAmounts[dishId] || 0) + 1,
    }));
  }

  function removeAmount(dishId) {
    if (amounts[dishId] > 0) {
      setAmounts((prevAmounts) => ({
        ...prevAmounts,
        [dishId]: prevAmounts[dishId] - 1,
      }));
    }
  }

  function toggleFavorite(idDish) {
    const favorites =
      JSON.parse(localStorage.getItem("@favorite.dishes")) || [];

    if (favorites.includes(idDish)) {
      const updatedFavorites = favorites.filter((fav) => fav !== idDish);
      localStorage.setItem(
        "@favorite.dishes",
        JSON.stringify(updatedFavorites)
      );
      setFavorite(updatedFavorites);
    } else {
      const updatedFavorites = [...favorites, idDish];
      localStorage.setItem(
        "@favorite.dishes",
        JSON.stringify(updatedFavorites)
      );
      setFavorite(updatedFavorites);
    }
  }

  function verifyFavorites() {
    const favorites =
      JSON.parse(localStorage.getItem("@favorite.dishes")) || [];
    setFavorite(favorites);
  }

  function handleInclude(dishId) {
    const quantity = amounts[dishId] || 0;
    setCountDish((prevCount) => prevCount + quantity);

    // Recupera os pratos já incluídos do sessionStorage
    const includedDishes =
      JSON.parse(sessionStorage.getItem("@foodexplorer:id.dishes")) || [];

    // Verifica se o prato já foi incluído
    const existingDishIndex = includedDishes.findIndex(
      (dish) => dish.id === dishId
    );

    if (existingDishIndex !== -1) {
      // Atualiza a quantidade se o prato já foi incluído
      includedDishes[existingDishIndex].quantity += quantity;
    } else {
      // Adiciona um novo prato ao array
      includedDishes.push({ id: dishId, quantity });
    }

    // Atualiza o sessionStorage com o novo array
    setAmounts(0);
    sessionStorage.setItem(
      "@foodexplorer:id.dishes",
      JSON.stringify(includedDishes)
    );
  }

  useEffect(() => {
    verifyFavorites();
  }, []);

  return data.map((dish) => (
    <Container key={dish.id}>
      <div className="buttonHearth" onKeyUp={(event) => {if(event.key === "Enter") { console.log("Enter")}}} onClick={() => toggleFavorite(dish.id)}>
        <FaHeart
          style={{
            color: favorite.includes(dish.id) ? "red" : "white",
            fill: favorite.includes(dish.id) ? "red" : "white",
          }}
        />
      </div>
      <img
        className="imgDish"
        src={`${api.defaults.baseURL}/files/${dish.img_dish}`}
        alt="Imagem dish"
      />
      <Link className="toDetails" to={`/UserDetails/${dish.id}`}>
        {dish.name} <IoMdArrowDropright />
      </Link>
      <div className="ingredients">
        <div className="ingredients">{dish.description}</div>
      </div>
      <h2>R${dish.price}</h2>
      <div className="buttonsAmount">
        <button
          type="button"
          className="buttonAmount"
          onClick={() => removeAmount(dish.id)}
        >
          <AiOutlineMinus />
        </button>
        <span className="amount">{amounts[dish.id] || 0}</span>
        <button
          type="button"
          className="buttonAmount"
          onClick={() => addAmount(dish.id)}
        >
          <AiOutlinePlus />
        </button>
        <button
          type="button"
          className="buttonIncluse"
          onClick={() => handleInclude(dish.id)}
        >
          Incluir
        </button>
      </div>
    </Container>
  ));
}