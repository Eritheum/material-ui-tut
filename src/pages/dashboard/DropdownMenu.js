import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";

import { DropdownData } from "./DropdownData";
import SubMenu from "./SubMenu";

const menuBackground = "#05566F";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: menuBackground,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default function NestedList() {
  const classes = useStyles();
  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      className={classes.root}
    >
      {DropdownData.map((item, index) => {
        return <SubMenu button key={index} item={item} />;
      })}
    </List>
  );
}
