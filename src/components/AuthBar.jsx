import { StyledHeaderLink, StyledNav } from "./shared/HeaderLink.styled";

const AuthBar = () => {
  return (
    <StyledNav>
      <StyledHeaderLink to="/login">Login</StyledHeaderLink>
      <StyledHeaderLink to="/register">Register</StyledHeaderLink>
    </StyledNav>
  );
};

export default AuthBar;
