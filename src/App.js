import { BrowserRouter,Routes,Route } from 'react-router-dom';
import AdminLogin from './pages/AdminLogin';
import AdminPage from './pages/AdminPage';
import Get from './pages/GetID';
import Home from './pages/Home'
import Login from './pages/Login';
import ScheduleEdit from './pages/ScheduleEdit';
import ScheduleView from './pages/ScheduleView';
import Student from './pages/Student';
import Update from './pages/Update';
import UpdateCourses from './pages/UpdateCourses';
import ViewCourses from './pages/ViewCourses';
import ViewStudent from './pages/ViewStudent';
function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route index element={<Home/>}/>
        <Route path="Login" element={<Login/>}/>
        <Route path="Student" element={<Student/>}/>
        <Route path="ScheduleView" element={<ScheduleView/>}/>
        <Route path="GetID" element = {<Get/>}/>
        <Route path="Update" element = {<Update/>}/>
        <Route path="AdminLogin" element = {<AdminLogin/>}/>
        <Route path="AdminPage" element = {<AdminPage/>}/>
        <Route path="ViewStudent" element = {<ViewStudent/>}/>
        <Route path="ViewCourses" element = {<ViewCourses/>}/>
        <Route path="UpdateCourses" element = {<UpdateCourses/>}/>
        <Route path="ScheduleEdit" element = {<ScheduleEdit/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;