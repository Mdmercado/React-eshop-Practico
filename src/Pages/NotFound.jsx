import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "../styles/NotFound.scss";

function NotFound() {
  return (
    <div className="container">
      <h1 className="container-title">Pagina no encontrada</h1>
      <h1 className="container-title">Error 404</h1>
      <Link to="/" className="container-button">
        Regresar a la pagina principal
      </Link>
    </div>
  );
}

export { NotFound };
