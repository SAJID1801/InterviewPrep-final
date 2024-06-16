import React from "react";
import "../styles/Nav.css";
import { Link, useNavigate } from "react-router-dom";
import { BiUser } from "react-icons/bi";
function Nav() {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear("email");
    localStorage.clear("rating");
    navigate("/");
  };
  return (
    <div className="navbar">
      <div className="left-navbar">
        <h1 className="h1 inline ">
          <Link to="/">
            Interview<span className=" text-[#eb2121]">Prep</span>
          </Link>
        </h1>
        <Link to="/core-subject" className="a">
          CS Core
        </Link>

        <Link to="/generate-list-parameter" className="a">
          DSA
        </Link>

        <Link to="/resouce" className="a">
          Resources
        </Link>
      </div>
      <div class="right-navbar">
        {localStorage.getItem("email") !== null ? (
          <div className="flex items-center">
            <button className="a ml-2" onClick={() => logout()}>
              Logout
            </button>
          </div>
        ) : (
          <div>
            <Link to="/login" className="a ml-2">
              Log in
            </Link>
            <Link to="/signup" className="a">
              Sign Up
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Nav;
