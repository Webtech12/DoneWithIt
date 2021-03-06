import { useContext } from "react";
import jwtDecode from "jwt-decode";

import AuthContext from "./context";
import authStorage from "./storage";

export default useAuth = () => {
  const { user, setUser } = useContext(AuthContext);

  const handleLogin = (authToken) => {
    try {
      authContext.setUser(jwtDecode(authToken));
      authStorage.storeToken(authToken);
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogout = () => {
    setUser(null);
    authStorage.removeToken();
  };

  return { user, setUser, handleLogout, handleLogin };
};
