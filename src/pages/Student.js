import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../component/Student.css";

const Student = () => {
  return (
    <div className="divrootSt">
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
                <li className="nav-item">
                  <Link
                    to="/ScheduleView"
                    className="navbar-brand badge rounded-pill btn btn-outline-black  fs-5"
                  >
                    {" "}
                    Click here to view/print the schedule{" "}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/ScheduleEdit"
                    className="navbar-brand badge rounded-pill btn btn-outline-black  fs-5"
                  >
                    {" "}
                    Click here to register/edit the schedule{" "}
                  </Link>
                </li>
                <li className="nav-item">
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
      <div className="con">
        <form className="form">
          <div className="card">
            <div className="card-body">
              <img
                src="../images/IMG_8799.jpg"
                className="card-img-top2"
                alt="..."
              />
              <h4 className="card-text">Ziad Mohammed</h4>
              <h4 className="card-text"> 1927109</h4>
              <h4 className="card-text"> 2.01</h4>
              <h4 className="card-text">Computer Science</h4>
              <Link className="update" aria-current="page" to="/Update">
                Update
              </Link>
            </div>
          </div>
          <div className="card-silf">
            <div className="a3lan">
              <img
                className="photo"
                src="../images/اعلان.jpg"
                alt="advertisement"
              />
              <p className="p1">
                Published on <span class="date">March 25, 2023</span> by{" "}
                <span class="author">John Doe</span>{" "}
                <span class="ad-number">Ad #12345</span>
              </p>
            </div>
            <hr className="hr"></hr>
            <div className="a3lan">
              <img
                className="photo"
                src="../images/اعلان2.jpg"
                alt="advertisement"
              />
              <p className="p1">
                Published on <span class="date">March 25, 2023</span> by{" "}
                <span class="author">John Doe</span>{" "}
                <span class="ad-number">Ad #12345</span>
              </p>
            </div>
            <hr className="hr"></hr>
            <div className="a3lan">
              <img
                className="photo"
                src="../images/اعلان.jpg"
                alt="advertisement"
              />
              <p className="p1">
                Published on <span class="date">March 25, 2023</span> by{" "}
                <span class="author">John Doe</span>{" "}
                <span class="ad-number">Ad #12345</span>
              </p>
            </div>
            <hr className="hr"></hr>
            <div className="a3lan">
              <img
                className="photo"
                src="../images/اعلان2.jpg"
                alt="advertisement"
              />
              <p className="p1">
                Published on <span class="date">March 25, 2023</span> by{" "}
                <span class="author">John Doe</span>{" "}
                <span class="ad-number">Ad #12345</span>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Student;
