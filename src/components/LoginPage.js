import { useContext } from "react";
import UserContext from "../utils/UserContext";

const LoginPage = () => {
  const { user } = useContext(UserContext);
  return (
    <div>
      <h1>Login</h1>
      <h3>
        {user.name} - {user.email}
      </h3>
    </div>
  );
};

export default LoginPage;
