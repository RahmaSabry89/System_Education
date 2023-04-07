import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../component/Login.css";
const Login = () => {
  return (
    <div className="divroot1">
      <div id="root">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
          <div className="container-fluid">
            <Link className="navbar-brand  fs-5" to="#">
              Faculty Of Science
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    className="navbar-brand badge rounded-pill btn btn-outline-black  fs-5"
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </Link>
                </li>

                <li className="nav-item dropdown">
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div className="col-p-3-bg-light">
        <form>
          <label
            className="lable"
            for="exampleInputEmail1"
            class="form-label"
          ></label>
          <div className="mb-32">
            <label
              className="lable"
              for="exampleInputEmail1"
              class="form-label"
            >
              Student Id
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-32">
            <label className="lable" for="inputPassword5" class="form-label">
              Password
            </label>
            <input
              type="password"
              id="inputPassword5"
              class="form-control"
              aria-describedby="passwordHelpBlock"
            />
          </div>
          <div className="lo">
            <Link to="/Student" className="btn btn-dark">
              Log in
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
