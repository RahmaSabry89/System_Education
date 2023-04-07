import { Link } from "react-router-dom";
import "../component/ScheduleView.css";
import "bootstrap/dist/css/bootstrap.min.css";
const ScheduleView = () => {
  return (
    <div className="divrootSch">
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
              </ul>
            </div>
          </div>
        </nav>
      </div>

      <div className="container3">
        <table className="table table-dark">
          <thead>
            <tr>
              <th scope="col" className="col-color">Course code</th>
              <th scope="col">Course type</th>
              <th scope="col">the group</th>
              <th scope="col">today</th>
              <th scope="col">from</th>
              <th scope="col">to</th>
              <th scope="col">Place</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">
                R 494: Selected Topics in Mathematics (2) / Math494 : Selected
                Topics in Mathematics (2)
              </th>
              <td>n</td>
              <td> 2</td>
              <td>Saturday</td>
              <td> 10:00 am</td>
              <td> 12:00 pm</td>
              <td> 14</td>
            </tr>
            <tr>
              <th scope="row">
                Q 427: Selected Programming Languages ​​/ Comp427: Selected
                Programming Languages{" "}
              </th>
              <td>n</td>
              <td> 1</td>
              <td>Saturday</td>
              <td>12:00 pm</td>
              <td>02:00 pm</td>
              <td>17</td>
            </tr>
            <tr>
              <th scope="row">
                Q 407: Designing Programming Languages ​​/ Comp407: Programming
                Languages ​​Design{" "}
              </th>
              <td>n</td>
              <td>1</td>
              <td>Saturday</td>
              <td>02:00 pm</td>
              <td>04:00 pm</td>
              <td>17</td>
            </tr>
            <tr>
              <th scope="row">
                Q490: Research and Article / Comp490: Review Article{" "}
              </th>
              <td>n</td>
              <td>1</td>
              <td>Saturday</td>
              <td>06:00 pm</td>
              <td>08:00 pm</td>
              <td>By oath</td>
            </tr>
            <tr>
              <th scope="row">
                {" "}
                Q408: Artificial Intelligence / Comp408: Artificial Intelligence{" "}
              </th>
              <td>p</td>
              <td>1</td>
              <td>Monday</td>
              <td>08:00 am</td>
              <td>11:00 am</td>
              <td>M mathematical calculator 2 </td>
            </tr>
            <tr>
              <th scope="row"> Q402: Cryptography / Comp402: Cryptology </th>
              <td>n</td>
              <td>1</td>
              <td>Monday</td>
              <td> 02:00 pm</td>
              <td> 04:00 pm</td>
              <td> 17</td>
            </tr>
            <tr>
              <th scope="row">
                {" "}
                Q408: Artificial Intelligence / Comp408: Artificial Intelligence{" "}
              </th>
              <td>n</td>
              <td>1</td>
              <td>Monday</td>
              <td> 04:00 pm</td>
              <td> 06:00 pm</td>
              <td> 16</td>
            </tr>
            <tr>
              <th scope="row">
                {" "}
                Q 427: Selected Programming Languages ​​/ Comp427: Selected
                Programming Languages{" "}
              </th>
              <td>p</td>
              <td>1</td>
              <td>Tuesday</td>
              <td> 11:00 am</td>
              <td> 01:00 pm</td>
              <td> M mathematical calculator 2 </td>
            </tr>
            <tr>
              <th scope="row">
                {" "}
                R 494: Selected Topics in Mathematics (2) / Math494 : Selected
                Topics in Mathematics (2){" "}
              </th>
              <td>t</td>
              <td>1</td>
              <td>Wednesday</td>
              <td> 10:00 am</td>
              <td> 12:00 pm</td>
              <td> 13</td>
            </tr>
            <tr>
              <th scope="row"> Q402: Cryptography / Comp402: Cryptology </th>
              <td>n</td>
              <td>1</td>
              <td>Thursday</td>
              <td> 08:00 am</td>
              <td> 11:00 am</td>
              <td> M mathematical calculator </td>
            </tr>
            <tr>
              <th scope="row">
                {" "}
                Q 407: Designing Programming Languages ​​/ Comp407: Programming
                Languages ​​Design{" "}
              </th>
              <td>n</td>
              <td>1</td>
              <td>Thursday</td>
              <td> 02:00 pm</td>
              <td> 05:00 pm</td>
              <td> M old plant computer </td>
            </tr>
          </tbody>
        </table>

        <button type="submit" className="button5">
          Print
        </button>
      </div>
    </div>
  );
};

export default ScheduleView;
