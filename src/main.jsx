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
import Course from './components/course_view/Course' 

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
import Registered from './components/student_view/Registered'

const api= import.meta.env.VITE_API_URL 
const nit=10000
ReactDOM.createRoot(document.getElementById('root')).render(
  
  <BrowserRouter>
  <Routes>

    <Route path="/" element={<App/>}>
      <Route index element={<LoginPage/>}/>
    </Route>
    <Route path="/admin-panel" element={<AdminPanel url={`${api}obtener_universidad/`} nit={nit}/>}>
    </Route>


    <Route path="/admin-panel/course-home" element={<CourseHome url={`${api}cursos/`} nit={nit}/>}></Route>
    <Route path="/admin-panel/course-home/add-course" element={<AddCourse nit={nit} url={`${api}agregar_curso/`}/>}></Route>
    <Route path="/admin-panel/course-home/find-course-by-nrc" element={<FindCourseByNRC url={`${api}encontrar_curso/`} nit={nit} nombre="ENCONTRAR CURSO POR NRC" placeholder="NRC CURSO" alert="NRC"/>}></Route>
    <Route path="/admin-panel/course-home/approved-courses-by-student" element={<ApprovedCoursesByStudent url={`${api}cursos_aprobados_estudiante/`} nit={nit} nombre="ENCONTRAR APROBADOS CURSOS DE ESTUDIANTE" placeholder="ID ESTUDIANTE" alert="ID ESTUDIANTE"/>}></Route>
    <Route path="/admin-panel/course-home/approve-course" element={<ApproveCourse url={`${api}aprobar_curso/`} nit={nit} nombre="APROBAR CURSO A ESTUDIANTE" phstudent="ID ESTUDIANTE" phcourse="ID CURSO" alert="campos correctamente"/>}></Route>
    <Route path="/admin-panel/course-home/available-courses" element={<AvailableCourses url={`${api}filtrar_cursos_por_cupos/`} nit={nit} nombre="ENCONTRAR APROBADOS CURSOS DE ESTUDIANTE" placeholder="ID CURSO" alert="ID ESTUDIANTE"/>}></Route>
    <Route path="/admin-panel/course-home/checking-course" element={<CheckingCourse url={`${api}cursar_curso/`} nit={nit}/>}></Route>
    <Route path="/admin-panel/course-home/find-course-by-name" element={<FindCourseByName url={`${api}encontrar_curso_por_nombre/`} nit={nit} nombre="ENCONTRAR CURSO POR NOMBRE" placeholder="NOMBRE CURSO" alert="NOMBRE"/>}></Route>
    <Route path="/admin-panel/course-home/registered-course-by-student" element={<RegisteredCourseByStudent url={`${api}cursos_matriculados_estudiante/`} nit={nit} variable="ID ESTUDIANTE" nombre="CURSOS MATRICULADOS DE ESTUDIANTE" alert="ID ESTUDIANTE" placeholder="ID ESTUDIANTE"/>}></Route>


    <Route path="/admin-panel/teacher-home" element={<TeacherHome/>}></Route>
    <Route path="/admin-panel/teacher-home/activate-teacher" element={<ActivateTeacher/>}></Route>
    <Route path="/admin-panel/teacher-home/add-teacher" element={<AddTeacher nit={nit}  url={`${api}agregar_profesor/`}/>}></Route>
    <Route path="/admin-panel/teacher-home/deactivate-teacher" element={<DeactivateTeacher/>}></Route>
    <Route path="/admin-panel/teacher-home/deactivate-teacher" element={<DeactivateTeacher/>}></Route>
    <Route path="/admin-panel/teacher-home/find-teacher-by-id" element={<FindTeacherByID/>}></Route>
    <Route path="/admin-panel/teacher-home/find-teacher-by-name" element={<FindTeacherByName/>}></Route>


    <Route path="/admin-panel/student-home" element={<StudentHome/>}></Route>
    <Route path="/admin-panel/student-home/activate-student" element={<ActivateStudent/>}></Route>
    <Route path="/admin-panel/student-home/add-student" element={<AddStudent nit={nit}  url={`${api}agregar_estudiante/`}/>}></Route>
    <Route path="/admin-panel/student-home/deactivate-student" element={<DeactivateStudent/>}></Route> 
    <Route path="/admin-panel/student-home/find-student-by-id" element={<FindStudentByID/>}></Route>
    <Route path="/admin-panel/student-home/find-student-by-name" element={<FindStudentByName/>}></Route>
    <Route path="/admin-panel/student-home/register-student" element={<Registered url={`${api}matricula/`} nit={nit} phstudent="ID ESTUDIANTE" phcourse="NRC COURSE" phteacher="ID TEACHER"/>}></Route>
  </Routes>
</BrowserRouter>
)
