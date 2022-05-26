import React, { useState } from "react";
import "./navbar.css";

function Navbar({ isLoggedIn, setIsLoggedIn, name, avtar, email }) {
  const toggleLogin = (e) => {
    setIsLoggedIn(!isLoggedIn);
    setDrop(!drop);
  };
  const [drop, setDrop] = useState(false);
  const menu = (e) => setDrop(!drop);
  return (
    <div>
      <nav className="navbar">
        <div className="logo">Logo</div>
        {isLoggedIn && (
          <div className="user">
            {/* <div className="user-info">
                <h5>{post}</h5>
          </div>*/}
            <div className={`${!drop ? "dropdown" : "dropdown active"}`}>
              <ul className="links">
                <li>{name}</li>
                <li>{email}</li>
              </ul>
              <button className="btn btn-danger" onClick={toggleLogin}>
                Logout
              </button>
            </div>
            <div className="img-container" onClick={menu}>
              <img src={avtar} alt="avtar" />
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
