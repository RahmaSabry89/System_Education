import { Link } from "react-router-dom";
import "../component/UpdateCourses.css";
import "bootstrap/dist/css/bootstrap.min.css";
const UpdateCourses = () => {
  return (
    <div className="divrootupc">
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
              aria-expanded="true"
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
                    className="navbar-brand badge rounded-pill btn btn-outline-black fs-5 active"
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/AdminPage"
                    id="login-link"
                    className="navbar-brand badge rounded-pill btn btn-outline-black  fs-5"
                  >
                    Admin
                  </Link>
                </li>
                <li className="nav-item2">
                  <Link
                    className="navbar-brand badge rounded-pill btn btn-outline-black fs-5"
                    aria-current="page"
                    to="/Login"
                  >
                    Log out
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div className="child1">
        <div className="container">
          <form>
            <h2 className="h2">View Course</h2>
            <div class="row g-2 align-items-center mb-3">
              <div className="col-auto">
                <h5>
                  {" "}
                  <label htmlFor="Course Code" className="form-label">
                    Course Code:
                  </label>
                </h5>
              </div>
              <div className="col-auto ">
                <input
                  type="text"
                  readonly
                  class="form-control-plaintext"
                  id="staticName"
                  value="Math494"
                />
              </div>
            </div>
            <div class="row g-2 align-items-center mb-3">
              <div className="col-auto">
                <h5>
                  {" "}
                  <label htmlFor="Course Name" className="form-label">
                    Course Name:
                  </label>
                </h5>
              </div>
              <div className="col-auto">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Selected Topics in Mathematics"
                  name="name"
                />
              </div>
            </div>
            <div class="row g-2 align-items-center mb-3">
              <div className="col-auto">
                <h5>
                  {" "}
                  <label htmlFor="DoctorName" className="form-label">
                    Doctor Name:
                  </label>
                </h5>
              </div>
              <div className="col-auto">
                <input
                  type="text"
                  className="form-control"
                  id="DoctorName"
                  placeholder="none"
                  name="DoctorName"
                />
              </div>
            </div>
            <div class="row g-2 align-items-center mb-3">
              <div className="col-auto">
                <h5>
                  {" "}
                  <label htmlFor="Teaching Assistant" className="form-label">
                    Teaching Assistant:
                  </label>
                </h5>
              </div>
              <div className="col-auto">
                <input
                  type="text"
                  className="form-control"
                  id="Teaching Assistant"
                  placeholder="none"
                  name="Teaching Assistant"
                />
              </div>
            </div>
            <div class="row g-2 align-items-center mb-3">
              <div className="col-auto">
                <h5>
                  {" "}
                  <label htmlFor="Hours" className="form-label">
                    Hours:
                  </label>
                </h5>
              </div>
              <div className="col-auto">
                <input
                  type="text"
                  className="form-control"
                  id="Hours"
                  placeholder="3"
                  name="Hours"
                />
              </div>
            </div>
            <div class="row g-2 align-items-center mb-3">
              <div className="col-auto">
                <h5>
                  {" "}
                  <label htmlFor="Groups" className="form-label">
                    Groups:
                  </label>
                </h5>
              </div>
              <div className="col-auto">
                <input
                  type="text"
                  className="form-control"
                  id="Groups"
                  placeholder="2"
                  name="Groups"
                />
              </div>
            </div>
            <button type="submit" className="button6">
              Save modifications
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateCourses;
