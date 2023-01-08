import React from "react";
import Logo from "../logo.png"
const Header = () => {
  return (
    <div className="Header">
      <a href="/"><img src={Logo} alt="" width="15%"/></a>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">Contact</a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <button><a href="/">Connect</a></button>
        </li>
      </ul>
    </div>
  );
};

export default Header;
