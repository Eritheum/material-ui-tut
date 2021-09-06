import React, { useState } from "react";

import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import MenuIcon from "@material-ui/icons/Menu";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import {
  Container,
  IconButton,
  Divider,
  Typography,
  Badge,
  List,
  Toolbar,
  AppBar,
  Drawer,
  CssBaseline,
} from "@material-ui/core";
import { useHistory, useLocation } from "react-router-dom";

const menuColor = "#05566F";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  menulist: {
    display: "flex",
    alignItems: "center",
    background: menuColor,
  },
  mainIcon: {
    color: "white",
    fontSize: 17,
    paddingLeft: 6,
  },
  mainText: {
    color: "#DDE6EF",
    paddingLeft: 6,
    fontWeight: 500,
  },
  subMenu: {
    paddingLeft: 15,
    background: menuColor,
    paddingTop: 0,
    paddingBottom: 0,
  },
  subMenuIcon: {
    color: "#DDE6EF",
    paddingLeft: 35,
    paddingTop: 0,
    paddingBottom: 0,
    fontSize: 15,
  },
  subMenuText: {
    paddingLeft: 5,
    paddingTop: 0,
    paddingBottom: 0,
    variant: "h6",
    color: "#DDE6EF",
  },
}));

const SubMenu = ({ item }) => {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();

  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);

  return (
    <>
      <CssBaseline />
      <ListItem
        key={item.title}
        className={classes.menulist}
        to={item.path}
        onClick={item.subNav && showSubnav}
      >
        <ListItemIcon variant={"h3"} className={classes.mainIcon}>
          {item.icon}
        </ListItemIcon>
        <ListItemText className={classes.mainText}> {item.title}</ListItemText>
        {item.subNav && subnav
          ? item.iconOpened
          : item.subNav
          ? item.iconClosed
          : null}
      </ListItem>
      <div>
        {subnav &&
          item.subNav.map((item, index) => (
            <List className={classes.subMenu}>
              <ListItem
                to={item.path}
                key={index}
                button
                onClick={() => history.push(item.path)}
                className={
                  location.pathname === item.path ? classes.active : null
                }
              >
                <ListItemIcon className={classes.subMenuIcon}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText>
                  <Typography className={classes.subMenuText}>
                    {item.title}
                  </Typography>
                </ListItemText>
              </ListItem>
            </List>
          ))}
      </div>
    </>
  );
};

export default SubMenu;
