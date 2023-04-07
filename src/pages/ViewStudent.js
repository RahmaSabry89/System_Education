import { Link } from "react-router-dom";
import "../component/AdminPage.css";
import "bootstrap/dist/css/bootstrap.min.css";
const ViewStudent = () => {
  return (
    <div className="divrootAdP">
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
                    className="navbar-brand badge rounded-pill btn btn-outline-black fs-5"
                    aria-current="page"
                    to="/AdminPage"
                  >
                    Admin
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="navbar-brand badge rounded-pill btn btn-outline-black fs-5"
                    aria-current="page"
                    to="/AdminLogin"
                  >
                    Log out
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      <div className="container3">
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">Student code</th>
              <th scope="col">Student Name</th>
              <th scope="col"> GPA </th>
              <th scope="col">View</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row"> 1927109 </th>
              <td>Ziad Mohammed Ezzat</td>
              <td>2.01</td>
              <td>
                <a href="/Update">
                  <img className="imgview" src="../images/eye1.png" alt=""/>
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row">1927109 </th>
              <td>Ziad Mohammed Ezzat</td>
              <td>2.01</td>
              <td>
                <a href="/Update">
                  <img className="imgview" src="../images/eye1.png" alt=""/>
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row">1927109 </th>
              <td>Ziad Mohammed Ezzat</td>
              <td>2.01</td>
              <td>
                <a href="/Update">
                  <img className="imgview" src="../images/eye1.png" alt=""/>
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row">1927109 </th>
              <td>Ziad Mohammed Ezzat</td>
              <td>2.01</td>
              <td>
                <a href="/Update">
                  <img className="imgview" src="../images/eye1.png" alt=""/>
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row"> 1927109 </th>
              <td>Ziad Mohammed Ezzat</td>
              <td>2.01</td>
              <td>
                <a href="/Update">
                  <img className="imgview" src="../images/eye1.png" alt=""/>
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row"> 1927109</th>
              <td>Ziad Mohammed Ezzat</td>
              <td>2.01</td>
              <td>
                <a href="/Update">
                  <img className="imgview" src="../images/eye1.png" alt=""/>
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row"> 1927204 </th>
              <td>Rahma Sabry Ahmed</td>
              <td>2.1</td>
              <td>
                <a href="/Update">
                  <img className="imgview" src="../images/eye1.png" alt=""/>
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row"> 1927204</th>
              <td>Rahma Sabry Ahmed</td>
              <td>2.1</td>
              <td>
                <a href="/Update">
                  <img className="imgview" src="../images/eye1.png" alt=""/>
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row">1927204</th>
              <td>Rahma Sabry Ahmed</td>
              <td>2.1</td>
              <td>
                <a href="/Update">
                  <img className="imgview" src="../images/eye1.png"alt="" />
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row"> 1927204</th>
              <td>Rahma Sabry Ahmed</td>
              <td>2.1</td>
              <td>
                <a href="/Update">
                  <img className="imgview" src="../images/eye1.png" alt=""/>
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row"> 1927204</th>
              <td>Rahma Sabry Ahmed</td>
              <td>2.1</td>
              <td>
                <a href="/Update">
                  <img className="imgview" src="../images/eye1.png" alt=""/>
                </a>
              </td>
            </tr>
          </tbody>
        </table>
        <br></br>
      </div>
    </div>
  );
};

export default ViewStudent;
/*<button type="submit" className="button5">Print</button>*/
