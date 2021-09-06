import styled from "styled-components";
import { Link } from "react-router-dom";

export const SidebarLink = styled(Link)`
  display: flex;
  color: var(--brandYellow);
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 40px;
  text-decoration: none;
  font-size: var(--fontSmall);

  &:hover {
    background: #252831;
    border-left: 2px solid var(--brandYellow);
    cursor: pointer;
  }
`;

export const SidebarLabel = styled.span`
  margin-left: 20px;
`;

export const DropdownLink = styled(Link)`
  background: var(--grey1000);
  height: 30px;
  padding-left: 2.5rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: var(--white);
  font-size: var(--fontSmall);

  &:hover {
    background: var(--grey900);
    cursor: pointer;
  }
`;
