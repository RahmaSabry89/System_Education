import { Link } from "react-router-dom";
import "../component/AdminPage.css";
import "bootstrap/dist/css/bootstrap.min.css";
const ViewCourses = () => {
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
              <th scope="col">Course code</th>
              <th scope="col">Course Name</th>
              <th scope="col">Doctor</th>
              <th scope="col">Teaching Assistant</th>
              <th scope="col">Hours</th>
              <th scope="col">Groups</th>
              <th scope="col">Edit_Button</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Math494</th>
              <td>Selected Topics in Mathematics</td>
              <td> none</td>
              <td>none</td>
              <td> 3</td>
              <td> 2</td>
              <td>
                <a href="/UpdateCourses">
                  <img className="imgedit" src="../images/edit.png" alt=""/>
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row">Comp427</th>
              <td>Selected Programming Languages </td>
              <td> none</td>
              <td>none</td>
              <td>3</td>
              <td>1</td>
              <td>
                <a href="/UpdateCourses">
                  <img className="imgedit" src="../images/edit.png" alt="" />
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row">Comp407 </th>
              <td> Programming Languages ​​Design</td>
              <td>none</td>
              <td>none</td>
              <td>3</td>
              <td>2</td>
              <td>
                <a href="/UpdateCourses">
                  <img className="imgedit" src="../images/edit.png" alt=""/>
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row">Comp490 </th>
              <td>Review Article </td>
              <td>none</td>
              <td>none</td>
              <td>3</td>
              <td>2</td>
              <td>
                <a href="/UpdateCourses">
                  <img className="imgedit" src="../images/edit.png" alt=""/>
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row">Comp408 </th>
              <td>Artificial Intelligence</td>
              <td>none</td>
              <td>none</td>
              <td>3</td>
              <td>3</td>
              <td>
                <a href="/UpdateCourses">
                  <img className="imgedit" src="../images/edit.png" alt=""/>
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row">Comp402</th>
              <td>Cryptography/Cryptology</td>
              <td>none</td>
              <td>none</td>
              <td> 3</td>
              <td> 2</td>
              <td>
                <a href="/UpdateCourses">
                  <img className="imgedit" src="../images/edit.png" alt=""/>
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row"> Comp408 </th>
              <td>Artificial Intelligence</td>
              <td>none</td>
              <td>none</td>
              <td> 3</td>
              <td> 2</td>
              <td>
                <a href="/UpdateCourses">
                  <img className="imgedit" src="../images/edit.png" alt=""/>
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row"> Comp427 </th>
              <td>Selected Programming Languages</td>
              <td>none</td>
              <td>none</td>
              <td> 3</td>
              <td> 1</td>
              <td>
                <a href="/UpdateCourses">
                  <img className="imgedit" src="../images/edit.png" alt=""/>
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row">Math494 </th>
              <td>Selected Topics in Mathematics</td>
              <td>none</td>
              <td>none</td>
              <td> 3</td>
              <td> 2</td>
              <td>
                <a href="/UpdateCourses">
                  <img className="imgedit" src="../images/edit.png" alt=""/>
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row"> Comp402 </th>
              <td>Cryptography/Cryptology </td>
              <td>none</td>
              <td>none</td>
              <td>3</td>
              <td> 2</td>
              <td>
                <a href="/UpdateCourses">
                  <img className="imgedit" src="../images/edit.png" alt=""/>
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row"> Comp407</th>
              <td>Programming Languages ​​Design </td>
              <td>none</td>
              <td>none</td>
              <td> 3</td>
              <td> 2</td>
              <td>
                <a href="/UpdateCourses">
                  <img className="imgedit" src="../images/edit.png" alt=""/>
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

export default ViewCourses;
/*<button type="submit" className="button5">Print</button>*/
