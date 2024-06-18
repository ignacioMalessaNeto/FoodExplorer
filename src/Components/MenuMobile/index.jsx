import { Container } from "./styles";
import { Logout } from "../Logout";
import * as React from "react";
import { Menu, MenuItem, IconButton }from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

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
        style={{color: '#ffff'}}
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
      >
        <MenuItem onClick={handleClose}>
          <img
            src="../../../src/assets/order.svg"
            alt="order image"
            className="order"
          />
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Logout />
        </MenuItem>
      </Menu>
    </Container>
  );
}
