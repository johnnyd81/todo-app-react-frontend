import React from "react";
import { useAuthcontext } from "../hooks/useAuthcontext";
import { useLogout } from "../hooks/useLogout";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { user } = useAuthcontext();
  const { logout } = useLogout();

  return (
    <div>
      <nav className="navbar">
        <h2>Todo organizer</h2>
        {!user ? (
          <div className="links">
            <Link to="/login">
              <button type="button">Login</button>
            </Link>
            <Link to="/signup">
              <button type="button">Sign up</button>
            </Link>
          </div>
        ) : (
          <div className="links">
            <span className="greet">Hello {user.username}</span>
            <Link to="/">
              <button type="button" onClick={logout}>
                Log out
              </button>
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
