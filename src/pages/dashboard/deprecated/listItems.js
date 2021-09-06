import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import { DropdownData } from "../DropdownData";

import {
  BiCalendar,
  ImOffice,
  ImPencil2,
  ImPhone,
  ImUserPlus,
  ImSpoonKnife,
  ImBriefcase,
  ImDisplay,
  ImCart,
  ImCalendar,
  ImCog,
  ImCoinDollar,
  ImCoinYen,
  ImAddressBook,
} from "react-icons/im";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
  },
  nested: {
    paddingLeft: theme.spacing(3.5),
  },
  icon_main: {
    color: "white",
    fontSize: 25,
  },
  icon: {
    color: "white",
    fontSize: 15,
  },
  text: {
    color: "white",
    fontSize: "small",
  },
  text_main: {
    color: "#fefefe",
  },
}));

export default function MainListItems() {
  const classes = useStyles();

  const [openItem, setOpenItem] = useState(true);

  const handleClick = () => {
    setOpenItem(!openItem);
  };
  const [openItem1, setOpenItem1] = useState(true);

  const handleClick1 = () => {
    setOpenItem1(!openItem1);
  };
  return (
    <div className={classes.root}>
      <List>
        <div></div>
        <ListItem button onClick={handleClick}>
          <ListItemIcon>
            <ImDisplay className={classes.icon_main} />
          </ListItemIcon>
          <ListItemText className={classes.text_main} primary="Frontdesk" />
          {openItem ? (
            <ExpandLess className={classes.icon} />
          ) : (
            <ExpandMore className={classes.icon} />
          )}
        </ListItem>
        <Collapse in={openItem} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemIcon className={classes.icon}>
                <ImPencil2 />
              </ListItemIcon>
              <ListItemText primary="Bookings" className={classes.text} />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemIcon className={classes.icon}>
                <ImBriefcase />
              </ListItemIcon>
              <ListItemText primary="Reservation" className={classes.text} />
            </ListItem>
          </List>
        </Collapse>
      </List>
      <List>
        <ListItem button onClick={handleClick1}>
          <ListItemIcon>
            <ImCoinDollar className={classes.icon_main} />
          </ListItemIcon>
          <ListItemText
            varian="h3"
            primary="Point of Sales"
            className={classes.text_main}
          />
          {openItem1 ? (
            <ExpandLess className={classes.icon} />
          ) : (
            <ExpandMore className={classes.icon} />
          )}
        </ListItem>
        <Collapse in={openItem1} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemIcon className={classes.icon}>
                <ImSpoonKnife />
              </ListItemIcon>
              <ListItemText primary="Restaurant" className={classes.text} />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemIcon className={classes.icon}>
                <ImCart />
              </ListItemIcon>
              <ListItemText primary="Cashier" className={classes.text} />
            </ListItem>
          </List>
        </Collapse>
      </List>
    </div>
  );
}
