import React, { useContext, useEffect, useState } from "react";
import { DishContext } from "../../Hooks/dishContext"; // Ajuste o caminho conforme necessário
import { Container } from "./styles";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Input } from "../Input";
import { Logout } from "../Logout";
import { MenuMobile } from "../MenuMobile";
import order from "../../assets/order.svg";
import logoFoodExplorer from "../../assets/logoFoodExplorer.png";

// eslint-disable-next-line react/prop-types
export function HeaderUser({ onSearch }) {
  const { countDish, setCountDish } = useContext(DishContext); // Consumindo o contexto
  const [storageChange, setStorageChange] = useState(false);

  const handleSearch = (searchQuery) => {
    onSearch(searchQuery);
  };

  function verifyCount() {
    const count = sessionStorage.getItem("@foodexplorer:id.dishes");
    if (count) {
      const parsedCount = JSON.parse(count); // Converte a string JSON em um array
      setCountDish(parsedCount.length); // Atualiza o estado com o comprimento do array
    } else {
      setCountDish(0); // Se não houver dados, define como 0
    }
  }

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    verifyCount(); // Chama a função para verificar o contador ao montar o componente

    // Adiciona um listener para detectar mudanças no sessionStorage
    const handleStorageChange = () => {
      setStorageChange(!storageChange);
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [storageChange]); // Executa sempre que storageChange mudar

  return (
    <Container>
      <Link to="/" className="buttonHome">
        <img
          src={logoFoodExplorer}
          className="logoFoodExplorer"
          alt="Logo imagem food explorer"
        />
      </Link>

      <div className="heading">
        <div className="labels">
          <div className="containInputSearch">
            <Input
              className="inputSearch"
              icon={AiOutlineSearch}
              placeholder="Buscar pratos"
              onChange={e => handleSearch( e.target.value )}
            />
          </div>
        </div>
      </div>

      <Link className="favorites" to="/UserFavorites">
        Meus Favoritos
      </Link>

      <Link className="buttonOrder" to="UserOrder">
        <img src={order} alt="order imagem" className="orderButton" /> Pedidos (
        {countDish}) {/* Exibindo o valor de countDish */}
      </Link>

      <img src={order} alt="order imagem" className="order" />

      <div className="logout">
        <Logout alt="icone de logout" text={"Logout"} />
      </div>
      <MenuMobile />
    </Container>
  );
}
