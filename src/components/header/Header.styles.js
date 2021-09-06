import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.div`
  background: var(--white);
  height: 60px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: var(--grey1000);
`;
export const NavColor = styled.div`
  background: var(--brandYellow);
  height: 90px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: var(--grey1000);
`;

export const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 1.3rem;
  height: 50px;
  display: flex;
  padding: 8px;
  justify-content: flex-end;
  align-items: center;
`;
export const SidebarNav = styled.nav`
  background: var(--grey1000);
  width: 220px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350ms;
  z-index: 10;
`;

export const SidebarWrap = styled.div`
  width: 100%;
`;
