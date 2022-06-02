import React from "react";
import logo from "../media/logo.png";
import { useContext } from "react";
import { AppContext } from "../AppContext";
import { useNavigate } from "react-router-dom";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Button,
} from "@chakra-ui/react";
import { RepeatIcon, HamburgerIcon, StarIcon } from "@chakra-ui/icons";

function Header() {
  const navigate = useNavigate();
  const { data } = useContext(AppContext);

  function randomCoin(data) {
    const random = data[Math.floor(Math.random() * data.length)];
    return random.id;
  }

  return (
    <header>
      <div className="headerCenter">
        <div className="logo">
          <img
            src={logo}
            alt="weird alerts"
            onClick={() => {
              navigate("/");
            }}
          />
        </div>
        <div className="mobileMenu">
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<HamburgerIcon />}
            />
            <MenuList>
              <MenuItem
                icon={<StarIcon />}
                onClick={() => {
                  navigate("/");
                }}
              >
                The Top 100
              </MenuItem>
              <MenuItem
                icon={<RepeatIcon />}
                onClick={() => {
                  navigate("/coins/" + randomCoin(data));
                }}
              >
                Random Coin
              </MenuItem>
            </MenuList>
          </Menu>
        </div>
        <div className="desktopMenu">
          <Button
            size="sm"
            colorScheme="teal"
            leftIcon={<StarIcon />}
            marginRight="10px"
            onClick={() => {
              navigate("/");
            }}
          >
            The Top 100
          </Button>
          <Button
            size="sm"
            colorScheme="teal"
            leftIcon={<RepeatIcon />}
            onClick={() => {
              navigate("/coins/" + randomCoin(data));
            }}
          >
            Random Coin
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
