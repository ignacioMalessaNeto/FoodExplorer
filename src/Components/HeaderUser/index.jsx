import { Container } from "./styles";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Input } from "../Input";
import { Logout } from "../Logout";

// import { useState } from "react";
import { MenuMobile } from "../MenuMobile";
import order from "../../assets/order.svg";
import logoFoodExplorer from "../../assets/logoFoodExplorer.png";
import  foodExplorerLogoMobile from "../../assets/foodExplorerLogoMobile.png";

import PropTypes from "prop-types";

// {onSearch}
export function HeaderUser() {
  // const [searchType, setSearchType] = useState("name");
  // const handleSearch = (searchQuery) => {
  //   onSearch(searchQuery, searchType);
  // };

  return (
    <>
      <Container>
        <MenuMobile />
        <Link to="/">
          <img src={logoFoodExplorer} className="logoFoodExplorer" alt="Logo image food explorer" />
          <img src={foodExplorerLogoMobile} className="foodExplorerLogoMobile" alt="Logo image food explorer" />
        </Link>

        <div className="heading">

          <div className="labels">
            <div className="containInputSearch">
              <Input
                icon={AiOutlineSearch}
                placeholder="Busque por pratos."
                // onChange={(e) => handleSearch(e.target.value)}
              />
            </div>
            {/* <div className="divider">
              <label>
                <input
                  type="radio"
                  value="name"
                  checked={searchType === "name"}
                  onChange={() => setSearchType("name")}
                />
                Nome
              </label>

              <label>
                <input
                  type="radio"
                  value="description"
                  checked={searchType === "description"}
                  onChange={() => setSearchType("description")}
                />
                Ingredientes
              </label>
            </div> */}
          </div>
        </div>

        <button className="buttonOrder">
          {" "}
          <img src={order} alt="order image" /> Pedidos (0)
        </button>

        <img src={order} alt="order image" className="order" />

        <div className="logout">
          <Logout alt="icone de logout" />
        </div>
      </Container>
    </>
  );
}
HeaderUser.propTypes = {
  onSearch: PropTypes.func.isRequired,
};
