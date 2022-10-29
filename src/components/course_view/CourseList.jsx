
import axios from 'axios'
import { useEffect, useState } from 'react';
function CourseList(props) {
    const id=props.id
    const nit=props.nit
    const [courses,setCourses]=useState({})
    
    if(id===""){
        useEffect(function () {
            
            axios.get(`${props.url}`)
                .then((response)=> {
                    
                    setCourses(response.data)
                })
        }, [])
    }else{
            axios.get(`${props.url}${props.nit}/${id}/`)
                .then((response)=> {
                        setCourses(response.data)
                        
                    
                })
      
    }


    if(!Object.keys(courses).length){
        return 
    }


    return courses.map((curso)=>{
        if(curso.no_curso==-1){
            return (
                Course2(curso)
            )
        }else{
            return (
                Course(curso)
            )
        }
    })



        
    
}
function Course(curso){
    return(
    
        <div className="my-3 mx-4 w-44 bg-[#D9D9D9] items-center justify-center border-2 border-black font-bold italic text-black text-md"
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

function Course2(c){
    return (
        <div className=" my-3 mx-4 w-44 bg-[#D9D9D9] items-center justify-center border-2 border-black font-bold italic text-black text-md"
        key= {c.id}>
        <div className="text-decoration-line: underline py-1 text-md">{c.nombre_Materia}</div>
            <div > ID: {c.id}</div>
            <div > #CRED: {c.num_creditos}</div>
            <div className="pb-2"> #PRER: {c.idPrerequisito}</div>
        </div>
      ) 
}

export default CourseList;