import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.svg";
import "./style.css";
//reposanvél por conectar o redux com os reducers
import { useSelector } from "react-redux";
export default function Header() {
  const reserveSize = useSelector((state) => state.reducerReserver.length);
  return (
    <header className="container">
      <Link to="/">
        <img className="logo" src={logo} alt="logo" />
      </Link>
      <Link className="reserva" to="/reservas">
        <div>
          <strong>Minhas reservas</strong>
          <span>{reserveSize}</span>
        </div>
      </Link>
    </header>
  );
}
