
import axios from 'axios'
import { useEffect, useState } from 'react';

import {Link } from "react-router-dom"
import Navbar from '../Navbar';
function CourseList(params) {
    <Navbar/>
    const api= import.meta.env.VITE_API_URL    
    const [courses,setCourses]=useState({})
    useEffect(function () {
        axios.get(`${api}cursos/10000/`)
            .then((response)=> {
                
                setCourses(response.data)
            })
    }, [])

    if(!Object.keys(courses).length){
        return 
    }
    console.log(courses)
    return courses.map((curso)=> {
               return (
                    Course(curso)
               
               )
            })
        
    
}
function Course(curso){
    return(
    
        <div className=" my-3 mx-4 w-44 bg-[#D9D9D9] items-center justify-center border-2 border-black font-bold italic text-black text-md"
            key= {curso.no_curso}>
                <div className="text-decoration-line: underline py-1 text-md">{curso.nombre_Materia}</div>
                <div > ID: {curso.id}</div>
                <div > NRC: {curso.no_curso}</div>
                <div > #CRED: {curso.num_creditos}</div>
                <div > CUPOS: {curso.cupos}</div>
                <div > ACTIVO: {(curso.activo)? "Si":"No"}</div>
                <div > #PRER: {curso.idPrerequisito}</div>
                <div className="pb-2"> IDPROF: {curso.idProfesor}</div>
                
                
                
    
        </div>)
    
    }

export default CourseList;