import "./Navbar.css";
import AppsIcon from "@mui/icons-material/Apps";
import logo from "../assets/images/logo.svg";

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="row navbar"> 
      <nav style={{color: 'white'}} class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <div className="col-6">
            <Link class="navbar-brand" to='/'>
              <img
                style={{ height: "17px", width: "129px", marginLeft: "30%" }}
                src={logo}
                alt=""
              />
            </Link>
          </div>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul
              style={{ display: "flex", gap: "30px" }}
              class="navbar-nav me-auto mb-2 mb-lg-0"
            >
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to='/signup'>
                  Signup
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to='/about'>
                  About
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to='/product'>
                  Products
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to='/pricing'>
                  Pricing
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to='/support'>
                  Support
                </Link>
              </li>
              <li>
                <i style={{marginTop: '100%'}} class="fa-solid fa-bars"></i>
              </li>
              <li class="nav-item"></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
