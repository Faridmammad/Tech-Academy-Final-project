// eslint-disable-next-line no-unused-vars
import React from 'react';
import './header.scss';
import "../../assets/fonts/fonts.css"

function App() {
  return (

    <div className="navbar">
    <div className="logo"><a href="/home">Iconfood</a></div>

    <div className="menulinks">
      <ul>
        <li><a href='/'>Home</a></li>
        <li><a href='/'>Product</a></li>
        <li><a href='/'>Pricing</a></li>
        <li><a href='/'>Contact</a></li>

      </ul>
    </div>
      

      <div className="logreg">
        <a href = "/login">Login</a>
        <a href = "/register">Register</a>
      </div>
</div>
  );
}

export default App;