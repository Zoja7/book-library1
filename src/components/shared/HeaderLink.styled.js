import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const StyledHeaderLink = styled(NavLink)`
  padding: 8px 12px;
  border: 1px solid green;
  border-radius: 4px;
  font-size: 20px;
  display: flex;
  justify-content: center;
  color: lightgreen;
  font-weight: bold;
`;

export const StyledNav = styled.nav`
  display: flex;
  column-gap: 12px;
`;
