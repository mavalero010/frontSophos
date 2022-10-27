import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import LoginPage from './components/LoginPage'
import CourseList from './components/course_view/CourseList'
import AdminPanel from './components/AdminPanel'
import CourseHome from './components/CourseHome'
import AddCourse from './components/course_view/AddCourse'
import FindCourseByNRC from './components/course_view/FindCourseByNRC'

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
    <Route path="/admin-panel/profesor" element={<CourseList/>}></Route>
    <Route path="/admin-panel/estudiante-list" element={<CourseList/>}></Route>

  </Routes>
</BrowserRouter>
)
