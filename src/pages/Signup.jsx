import { useState } from "react";
import useSignup from "../hooks/useSignup";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { error, isLoading, signup } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await signup(username.trim(), password.trim());
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="form signup">
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
          Sign up
        </button>
      </form>
      <div className="errBox">
        {error && <div className="errMsg">{error}</div>}
      </div>
    </div>
  );
};

export default Signup;
