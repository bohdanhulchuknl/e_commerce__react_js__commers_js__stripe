import React from "react";

import { Outlet, Link, useLocation } from "react-router-dom";

import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  MenuItem,
  Menu,
  Typography,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";

import useStyles from "./styles";

import logo from "../../assets/logo.png";

const Navbar = ({ totalItem }) => {
  const classes = useStyles();
  const location = useLocation();
  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography variant="h6" color="inherit" component={Link} to="/">
            <img
              src={logo}
              alt="Commerce js"
              height="25px"
              className={classes.image}
            />
            React Commerce
          </Typography>
          <div className={classes.grow}></div>
          {location.pathname === "/" && (
            <div className={classes.button}> 
              <IconButton
                component={Link}
                to="/cart"
                aria-label="show card items"
                color="inherit"
              >
                <Badge
                  badgeContent={totalItem && totalItem}
                  color="secondary"
                  overlap="rectangular"
                >
                  <ShoppingCart />
                </Badge>
              </IconButton>
            </div>
          )}
        </Toolbar>
      </AppBar>
      <Outlet />
    </>
  );
};

export default Navbar;
