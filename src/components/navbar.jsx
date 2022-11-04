import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import "../styles/navbar.scss";
import {
  AccountCircle,
  PersonAddAlt1,
  Login,
  Logout,
  LibraryBooks,
  MenuRounded,
} from "@mui/icons-material";
import {
  IconButton,
  Menu,
  MenuItem,
  Avatar,
  Tooltip,
  Divider,
} from "@mui/material";
import { ActContext } from "../App";

const Navbar = () => {
  const { connected, user, setConnected, width } = useContext(ActContext);
  const [anchor, setAnchor] = useState(null);
  const [anchor1, setAnchor1] = useState(null);
  const open = Boolean(anchor);
  const open1 = Boolean(anchor1);
  const handleClick = (event) => {
    setAnchor(event.currentTarget);
  };
  const handleClick1 = (event) => {
    setAnchor1(event.currentTarget);
  };
  const menus = [
    {
      label: "Accueil",
      link: "/",
    },
    {
      label: "Qui sommes-nous?",
      link: "/about-us",
    },
    {
      label: "Nos projets",
      link: "/project",
    },
    {
      label: "Contact",
      link: "contact",
    },
  ];
  return (
    <nav id="navbar">
      <div id="logo">
        <h1>Teraka</h1>
      </div>
      <ul>
        {width > 700 ? (
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
        <li>
          <Tooltip title="Espace personnel">
            <IconButton onClick={handleClick} size="small" sx={{ ml: 2 }}>
              {connected ? (
                <Avatar sx={{ width: 32, height: 32 }}>
                  {user.name.substr(0, 1)}
                </Avatar>
              ) : (
                <AccountCircle sx={{ width: 32, height: 32 }} />
              )}
            </IconButton>
          </Tooltip>
          <Menu
            open={open}
            onClose={() => setAnchor(null)}
            onClick={() => setAnchor(null)}
            anchorEl={anchor}
          >
            <MenuItem>
              <PersonAddAlt1 sx={{ width: 20, height: 20 }} />
              <p>Inscription</p>
            </MenuItem>
            <MenuItem>
              <Login sx={{ width: 20, height: 20 }} />
              <p>Connexion</p>
            </MenuItem>
            {connected && (
              <div>
                <Divider></Divider>
                <MenuItem>
                  <LibraryBooks sx={{ width: 20, height: 20 }} />
                  <p>Formation</p>
                </MenuItem>
                <MenuItem onClick={() => setConnected(false)}>
                  <Logout sx={{ width: 20, height: 20 }} />
                  <p>Quitter</p>
                </MenuItem>
              </div>
            )}
          </Menu>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
