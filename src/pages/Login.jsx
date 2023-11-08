import { useState } from "react";
import useLogin from "../hooks/useLogin";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { error, isLoading, login } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
   //by using the trim method trailing whitespace is removed from the end of the username and the password
    await login(username.trim(), password.trim());
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="form login">
        <div className="form-field">
          <label>Username: </label>
          <input
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
        </div>
        <div className="form-field">
          <label>Password: </label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <button type="submit" disabled={isLoading}>
          Log in
        </button>
      </form>
      <div className="errBox">
        {error && <div className="errMsg">{error}</div>}
      </div>
    </div>
  );
};

export default Login;
