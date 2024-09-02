import React, { useEffect,useContext } from "react";
import { Link } from "react-router-dom";
import ProductContext from "../../Context/Product/ProductContext";
import './NavBar.css'
const Navbar = () => {
  const {
  GetAll,cart
  } = useContext(ProductContext);

  useEffect(()=>{GetAll();},[])
  return (
    <nav className="navbar navbar-expand-md navbar-expand-lg bg-body-tertiary bg-dark navbar-dark">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <Link className="navbar-brand" to="/">
          CartMe!
        </Link>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart">
                Cart<span class="badge text-bg-danger">{cart.length}</span>
              </Link>
            
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/index">
                IndexDB
              </Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
