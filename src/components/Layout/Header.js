import React from "react";
import { NavLink, Link } from "react-router-dom";
import '../../styles/Header.css'
import { toast } from "react-toastify";


const isLoggedIn = localStorage.getItem('isLoggedIn')
const Header = () => {

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn')
    toast.success('Logout Sucessfull')
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">

          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <Link to="/" className="navbar-brand">
              <img src="https://cdn-icons-png.flaticon.com/128/2798/2798007.png" />Rock Movies
            </Link>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {isLoggedIn && <li className="nav-item">
                <NavLink to="/company-info" className="nav-link ">
                  Company Info
                </NavLink>
              </li>}
              {!isLoggedIn &&
                <>
                  <li className="nav-item">
                    <NavLink to="/sign-up" className="nav-link">
                      Sign Up
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/" className="nav-link">
                      Login
                    </NavLink>
                  </li>
                </>
              }

              {isLoggedIn && <li className="nav-item">
                <NavLink onClick={logoutHandler} to="/" className="nav-link">
                  Logout
                </NavLink>
              </li>}

            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
