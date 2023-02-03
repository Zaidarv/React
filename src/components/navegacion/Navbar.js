import React from "react";

const Navbar = () => {
    return(
        <div>
          <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
              <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                  <li className="nav-item">
                      <a className="nav-link active" aria-current="page" href="#">Tutorados</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Reportes</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Estadisticas</a>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                     Tutores
                    </a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="#">Asignar Tutores</a></li>
                      <li><a className="dropdown-item" href="#">Tutores activos</a></li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
    )
}

export default Navbar;