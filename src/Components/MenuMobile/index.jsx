import { Container } from "./styles";
import { Logout } from "../Logout";
import * as React from "react";
import { Menu, MenuItem, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

export function MenuMobile() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Container>
      <IconButton>
        <MenuIcon
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          style={{ color: "#065E7C", fontSize: "35px" }}
        />
      </IconButton>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right", // Faz o menu "deslizar" para a esquerda
        }}
        sx={{
          "& .MuiPaper-root": {
            backgroundColor: "#091E26;", // Altera a cor de fundo do menu
            color: "#FFF", // Altera a cor do texto
            fontSize: "18px", // Tamanho do texto
            padding: "5px 10px",
          },
        }}
      >
        <MenuItem
          onClick={handleClose}
          sx={{
            paddingBottom: "20px",
            color: "#82F3FF",
            display: "flex",
            gap: "10px",
            fontFamily: "Poppins",
            fontSize: "85%",
          }}
          className="containerOrder"
        >
          <img
            src="../../../src/assets/order.svg"
            alt="order imagem"
            className="order"
          />
          Pedidos (0)
        </MenuItem>
        <Link className="favorites" to="/UserFavorites">

        <MenuItem
          onClick={handleClose}
          sx={{
            paddingBottom: "20px",
            color: "#82F3FF",
            display: "flex",
            gap: "10px",
            fontFamily: "Poppins",
            fontSize: "85%",
          }}
        >
          Meus Favoritos
        </MenuItem>
        </Link>

        <MenuItem
          onClick={handleClose}
          sx={{
            paddingBottom: "20px",
            color: "#82F3FF",
            display: "flex",
            gap: "10px",
            fontFamily: "Poppins",
            fontSize: "85%",
          }}
        >
          <Logout /> Logout
        </MenuItem>
      </Menu>
    </Container>
  );
}
