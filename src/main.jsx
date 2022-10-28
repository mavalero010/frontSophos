import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import LoginPage from './components/LoginPage'
import AdminPanel from './components/AdminPanel'
import TeacherHome from './components/TeacherHome'
import StudentHome from './components/StudentHome'
import CourseHome from './components/CourseHome'
import AddCourse from './components/course_view/AddCourse'
import FindCourseByNRC from './components/course_view/FindCourseByNRC'
import ApprovedCoursesByStudent from './components/course_view/ApprovedCoursesByStudent'
import ApproveCourse from './components/course_view/ApproveCourse'
import AvailableCourses from './components/course_view/AvailableCourses'
import CheckingCourse from './components/course_view/CheckingCourse' 
import FindCourseByName from './components/course_view/FindCourseByName' 
import RegisteredCourseByStudent from './components/course_view/RegisteredCourseByStudent' 

import ActivateTeacher from './components/teacher_view/ActivateTeacher' 
import AddTeacher from './components/teacher_view/AddTeacher' 
import DeactivateTeacher from './components/teacher_view/DeactivateTeacher' 
import FindTeacherByID from './components/teacher_view/FindTeacherByID' 
import FindTeacherByName from './components/teacher_view/FindTeacherByName'  

import ActivateStudent from './components/student_view/ActivateStudent' 
import AddStudent from './components/student_view/AddStudent' 
import DeactivateStudent from './components/student_view/DeactivateStudent'
import FindStudentByID from './components/student_view/FindStudentByID'
import FindStudentByName from './components/student_view/FindStudentByName'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>

    <Route path="/" element={<App/>}>
      <Route index element={<LoginPage/>}/>
    </Route>
    <Route path="/admin-panel" element={<AdminPanel/>}>
    </Route>


    <Route path="/admin-panel/course-home" element={<CourseHome/>}></Route>
    <Route path="/admin-panel/course-home/add-course" element={<AddCourse/>}></Route>
    <Route path="/admin-panel/course-home/find-course-by-nrc" element={<FindCourseByNRC/>}></Route>
    <Route path="/admin-panel/course-home/approved-courses-by-student" element={<ApprovedCoursesByStudent/>}></Route>
    <Route path="/admin-panel/course-home/approve-course" element={<ApproveCourse/>}></Route>
    <Route path="/admin-panel/course-home/available-courses" element={<AvailableCourses/>}></Route>CheckingCourse
    <Route path="/admin-panel/course-home/cheking-course" element={<CheckingCourse/>}></Route>
    <Route path="/admin-panel/course-home/find-course-by-name" element={<FindCourseByName/>}></Route>
    <Route path="/admin-panel/course-home/registered-course-by-student" element={<RegisteredCourseByStudent/>}></Route>


    <Route path="/admin-panel/teacher-home" element={<TeacherHome/>}></Route>
    <Route path="/admin-panel/teacher-home/activate-teacher" element={<ActivateTeacher/>}></Route>
    <Route path="/admin-panel/teacher-home/add-teacher" element={<AddTeacher/>}></Route>
    <Route path="/admin-panel/teacher-home/deactivate-teacher" element={<DeactivateTeacher/>}></Route>
    <Route path="/admin-panel/teacher-home/deactivate-teacher" element={<DeactivateTeacher/>}></Route>
    <Route path="/admin-panel/teacher-home/find-teacher-by-id" element={<FindTeacherByID/>}></Route>
    <Route path="/admin-panel/teacher-home/find-teacher-by-name" element={<FindTeacherByName/>}></Route>


    <Route path="/admin-panel/student-home" element={<StudentHome/>}></Route>
    <Route path="/admin-panel/student-home/activate-student" element={<ActivateStudent/>}></Route>
    <Route path="/admin-panel/student-home/add-student" element={<AddStudent/>}></Route>
    <Route path="/admin-panel/student-home/deactivate-student" element={<DeactivateStudent/>}></Route> 
    <Route path="/admin-panel/student-home/find-student-by-id" element={<FindStudentByID/>}></Route>
    <Route path="/admin-panel/student-home/find-student-by-name" element={<FindStudentByName/>}></Route>
  </Routes>
</BrowserRouter>
)
