import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "../header/SidebarData";
import SubMenu from "./subMenu/SubMenu";
import { IconContext } from "react-icons/lib";

import {
  Nav,
  NavColor,
  NavIcon,
  SidebarNav,
  SidebarWrap,
} from "./Sidebar.styles";

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: `var(--grey500)` }}>
        <Nav>
          <NavIcon to="#">
            <FaIcons.FaBars onClick={showSidebar} />
          </NavIcon>
        </Nav>
        <NavColor>Headers goes here</NavColor>
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <NavIcon className="close" to="#">
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </NavIcon>
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;
