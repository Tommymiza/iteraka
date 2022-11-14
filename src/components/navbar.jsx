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
import { IconButton, Menu, MenuItem, Avatar, Tooltip } from "@mui/material";
import { ActContext } from "../App";
import Lang from "./Lang";
import Connexion from "./Connexion"
import Inscription from "./Inscription";

const Navbar = () => {
  const { t, connected, user, setUser, setConnected, width } = useContext(ActContext);
  const [anchor, setAnchor] = useState(null);
  const [anchor1, setAnchor1] = useState(null);
  const [dialog, setDialog] = useState();
  const open = Boolean(anchor);
  const open1 = Boolean(anchor1);
  const handleClick = (event) => {
    setAnchor(event.currentTarget);
  };
  const handleClick1 = (event) => {
    setAnchor1(event.currentTarget);
  };
  const logout = ()=>{
    setUser()
    setConnected(false)
    document.cookie = "accessKey=; expires=01 Oct 1970 00:00:00 GMT";
  }
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
      link: "contact",
    },
  ];
  return (
    <nav id="navbar">
      <div id="logo">
        <h1>Teraka</h1>
      </div>
      <ul>
        <Lang />
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
                  {user.nom.substr(0, 1)}
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
            {!connected ? (
              <div>
                <MenuItem onClick={()=>{
                  setDialog(<Inscription close={()=>setDialog()} />)
                }}>
                  <PersonAddAlt1 sx={{ width: 20, height: 20 }} />
                  <p>{t("navbar.avatar.0")}</p>
                </MenuItem>
                <MenuItem onClick={()=>{
                  setDialog(<Connexion close={()=>setDialog()} />)
                }}>
                  <Login sx={{ width: 20, height: 20 }} />
                  <p>{t("navbar.avatar.1")}</p>
                </MenuItem>
              </div>
            ) : (
              <div>
                <MenuItem>
                  <LibraryBooks sx={{ width: 20, height: 20 }} />
                  <p>{t("navbar.avatar.2")}</p>
                </MenuItem>
                <MenuItem onClick={logout}>
                  <Logout sx={{ width: 20, height: 20 }} />
                  <p>{t("navbar.avatar.3")}</p>
                </MenuItem>
              </div>
            )}
          </Menu>
        </li>
      </ul>
      {dialog}
    </nav>
  );
};

export default Navbar;
