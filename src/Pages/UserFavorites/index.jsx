import { useEffect, useState } from "react";
import { Container } from "./styles.js";
import { api } from "./../../Services/api";
import { Button } from "../../Components/Button/index.jsx";

export function UserFavorites() {
  const [dishesId, setDishesId] = useState([]);
  const [dishes, setDishes] = useState([]); // Estado para armazenar os pratos carregados

  function updateFavorites() {
    const storedDishes = localStorage.getItem("@favorite.dishes");
    if (storedDishes) {
      setDishesId(JSON.parse(storedDishes)); // Converte string em array
    } else {
      setDishesId([]); // Se não houver favoritos, define como array vazio
    }
  }

  async function getDishes(dishesIdArray) {
    if (!dishesIdArray || dishesIdArray.length === 0) {
      setDishes([]);
      return;
    }

    try {
      const dishesData = await Promise.all(
        dishesIdArray.map(async (dishId) => {
          const response = await api.get(`/dish/${dishId}`);
          return response.data;
        })
      );
      setDishes(dishesData); // Atualiza o estado com os pratos carregados
    } catch (error) {
      console.error("Erro ao buscar pratos:", error);
    }
  }

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    updateFavorites();
  }, []);

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    getDishes(dishesId);
  }, [JSON.stringify(dishesId)]);

  return (
    <Container>

      {/* TODO FAZER COM QUE o usuário consiga adicionar pratos nessa tela também */}
      <Button/>
      <h2>Pratos Favoritos</h2>
      <div className="containerCards">
        {dishes.length > 0 ? (
          dishes.map((dish) => (
            <div key={dish.id} className="cardFavorite">
              <img
                className="imageFavorite"
                src={`${api.defaults.baseURL}/files/${dish.img_dish}`}
                alt="imagem dish"
              />
              <h3>{dish.name}</h3>
              <p className="description">{dish.description}</p>
            </div>
          ))
        ) : (
          <p className="noFavorites">Nenhum prato favoritado</p>
        )}
      </div>
    </Container>
  );
}
