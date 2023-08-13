import React from "react";
import { Link } from "react-router-dom";

// BrowserRouter as Router in index.js
// Route, Route app.js
// Link nav.jsx
const Nav = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/stocks/:symbol">Stock</Link>
      <Link to="/stocks">Dashboard</Link>
    </div>
  );
};

export default Nav;
