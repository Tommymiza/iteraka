import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import "../styles/navbar.scss";
import {
  MenuRounded,
} from "@mui/icons-material";
import { IconButton, Menu, MenuItem, Tooltip } from "@mui/material";
import { ActContext } from "../App";
import Lang from "./Lang";

const Navbar = () => {
  const { t, width } = useContext(ActContext);
  const [anchor1, setAnchor1] = useState(null);
  const open1 = Boolean(anchor1);
  const handleClick1 = (event) => {
    setAnchor1(event.currentTarget);
  };
  const menus = [
    {
      label: t("navbar.menus.0"),
      link: "/",
    },
    {
      label: t("navbar.menus.1"),
      link: "/about-us",
    },
    {
      label: t("navbar.menus.2"),
      link: "/project",
    },
    {
      label: t("navbar.menus.3"),
      link: "/contact",
    },
  ];
  return (
    <nav id="navbar">
      <div id="logo">
        <img src="/images/Logo.png" alt="Logo Teraka" />
      </div>
      <ul>
        <Lang />
        {width > 800 ? (
          menus.map((item) => (
            <NavLink
              key={item.label}
              to={item.link}
              end={item.link === "/" ? true : false}
            >
              <li>{item.label}</li>
            </NavLink>
          ))
        ) : (
          <div>
            <Tooltip title="Menu">
              <IconButton onClick={handleClick1} size="small" sx={{ ml: 2 }}>
                <MenuRounded sx={{ width: 32, height: 32 }} />
              </IconButton>
            </Tooltip>
            <Menu
              open={open1}
              onClose={() => setAnchor1(null)}
              onClick={() => setAnchor1(null)}
              anchorEl={anchor1}
            >
              {menus.map((item) => (
                <MenuItem key={item.label}>
                  <NavLink
                    to={item.link}
                    end={item.link === "/" ? true : false}
                  >
                    <p>{item.label}</p>
                  </NavLink>
                </MenuItem>
              ))}
            </Menu>
          </div>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
