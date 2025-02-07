import { Container } from "./styles";

import { useState, useEffect, useContext } from "react";

import { Button } from "../../Components/Button";

import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

import { ButtonText } from "../../Components/ButtonText";

import { Ingredients } from "../../Components/Ingredients";

import { api } from "../../Services/api";

import { useParams } from "react-router-dom";

import { DishContext } from "../../Hooks/dishContext";


export function UserDetails() {
  const [amount, setAmount] = useState(1);

  const [dishs, setDishs] = useState();

  const { dish_id } = useParams();

  // eslint-disable-next-line no-unused-vars
  const [ingredients, setIngredients] = useState([]);
  const { setCountDish } = useContext(DishContext);

  function handleInclude(dishId) {
    const quantity = amount || 0;
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
    setCountDish(amount);
    // Atualiza o sessionStorage com o novo array
    setAmount(0);
    sessionStorage.setItem(
      "@foodexplorer:id.dishes",
      JSON.stringify(includedDishes)
    );
  }

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    async function getDish() {
      const response = await api.get(`/dish/${dish_id}`);
      setDishs(response.data);
    }

    async function getIngredients() {
      const response = await api.get("/ingredients");

      setIngredients(response.data);
    }

    getDish();
    getIngredients();
    console.log(dishs);
  }, []);

  return (
    <Container>
      <Button />
      {dishs && (
        <div className="content">
          <img
            className="img_dish"
            src={`${api.defaults.baseURL}/files/${dishs.img_dish}`}
            alt="imagem dish"
          />
          <main>
            <h1>{dishs.name}</h1>

            <p>{dishs.description}</p>

            <div>
              {
                // biome-ignore lint/complexity/useOptionalChain: <explanation>
                dishs.ingredients &&
                  dishs.ingredients.map((ingredient) => (
                    <Ingredients key={ingredient.id} title={ingredient.name} />
                  ))
              }
            </div>
            <div className="buttonsAmount">
              <button
                type="button"
                className="buttonAmount"
                onClick={() => {
                  setAmount(amount - 1);
                }}
              >
                <AiOutlineMinus />
              </button>
              {amount}
              <button
                type="button"
                className="buttonAmount"
                onClick={() => {
                  setAmount(amount + 1);
                }}
              >
                <AiOutlinePlus />
              </button>
              <ButtonText title={`Incluir R$:${dishs.price}`} onClick={() => handleInclude(dishs.id)}/>
            </div>
          </main>
        </div>
      )}
    </Container>
  );
}
