import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import "./navbar.css"


const navbar = () => {
  return (
  <nav className="navbar fondo-navbar navbar-expand-lg bg-light container-fluid">
    <div className="container-fluid">
      <a className="navbar-brand text-light" href="#">Altera 3D</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav div4">
          <a className="nav-link active text-light" aria-current="page" href="#">Inicio</a>
          <a className="nav-link active text-light" href="#">Tienda</a>
          <a className="nav-link active text-light" href="#">Contacto</a>
          <div class="dropdown">
          <button class="btn btn-cat dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Categorias
          </button>
          <ul class="dropdown-menu">
            <li><button class="dropdown-item" type="button">Accesorios Celulares</button></li>
            <li><button class="dropdown-item" type="button">Accesorios Notebook</button></li>
            <li><button class="dropdown-item" type="button">Organizadores de Escritorio</button></li>
            <li><button class="dropdown-item" type="button">Adornos para el hogar</button></li>
          </ul>
        </div>
        </div>
      </div>
        <div className="cajaImagen">
          <CartWidget/>
        </div>
    </div>
</nav>
  )
}

export default navbar