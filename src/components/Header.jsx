import { useState } from "react";
import UserBar from "./UserBar";
import AuthBar from "./AuthBar";

const Header = () => {
  const [isAuth] = useState(false);
  return <header>{isAuth ? <UserBar /> : <AuthBar />}</header>;
};

export default Header;
