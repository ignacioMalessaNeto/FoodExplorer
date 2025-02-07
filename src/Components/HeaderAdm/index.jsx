import { Container, Labels2 } from "./styles";
import { useAuth } from "../../Hooks/auth";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Input } from "../Input";
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import order from "../../assets/order.svg";
import exit from "../../assets/exit.svg";
import logoAdmFoodExplorer from "../../assets/logoAdmFoodExplorer.png";
import { api } from "../../Services/api";

// eslint-disable-next-line react/prop-types
export function HeaderAdm({ onSearch }) {
  const { signOut } = useAuth();
  const [countOrders, setCountOrders] = useState(0);

  const handleSearch = (searchQuery) => {
    onSearch(searchQuery);
  };

  async function getOrders() {}

  async function addStoredOrders() {
    const response = await api.get("/orders");

    const teste = response.data.orders;

    setCountOrders(teste.length);

    sessionStorage.setItem("@foodexplorer.ordersAdm", response.data.orders);
  }

  useEffect(() => {
    getOrders();
    addStoredOrders();
  });
  return (
    <>
      <Container>
        <Link to="/">
          <img src={logoAdmFoodExplorer} alt="Logo imagem food explorer" />
        </Link>

        <Input
          icon={AiOutlineSearch}
          placeholder="Busque por pratos."
          onChange={(e) => handleSearch(e.target.value)}
        />

        <Link to="/AdmOrder" className="orderAdm">
          Pedidos ({countOrders}){" "}
        </Link>

        <Link className="buttonOrder" to="/addDish">
          Novo Prato
        </Link>

        <img src={order} alt="order imagem" className="order" />

        <Link to={"/"}>
          <button type="button" onClick={signOut}>
            <img src={exit} alt="icon for exit" />
          </button>
        </Link>
      </Container>
      <Labels2>
        <Link className="buttonAddDishMobile" to="/addDish">
          Novo Prato
        </Link>
        <div className="inputMobile">
          <Input
            icon={AiOutlineSearch}
            placeholder="Busque por pratos."
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>
      </Labels2>
    </>
  );
}
