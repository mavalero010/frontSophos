//LISTA DE ESTUDIANTES

import axios from 'axios'
import { useEffect, useState } from 'react';
import Navbar from '../Navbar';

function StudentList(params){
    <Navbar/>
    
    const api=import.meta.env.VITE_API_URL    
    const nit=10000
    const [estudiantes,setEstudiantes]=useState({})
    useEffect(function () {
        axios.get(`${api}estudiantes/${nit}/`)
            .then((response)=> {
                console.log("RESPONSE: ",response.data)
                setEstudiantes(response.data)
            })
    }, [])

    if(!Object.keys(estudiantes).length){
        return 
    }
    console.log(estudiantes)
    return estudiantes.map((estudiante)=> {
               return (
                Student(estudiante)
               
               )
            })
        
}

function Student(estudiante){
    return(
    
        <div className=" my-3 mx-4 w-44 bg-[#D9D9D9] items-center justify-center border-2 border-black font-bold italic text-black text-xs"
            key= {estudiante.id}>
                <div className="text-decoration-line: underline py-1 text-md text-2xl">{estudiante.nombre} {estudiante.apellido}</div>
                <div > ID: {estudiante.id}</div>
                <div > #CRED: {estudiante.numero_de_creditos}</div>
                <div > SEM: {estudiante.semestre_cursado}</div>
                <div > {estudiante.email}</div>
                <div > TEL: {estudiante.telefono}</div>
                <div > DIR: {estudiante.direccion}</div>
                <div > FAC: {estudiante.facultad}</div>
                <div className="pb-2"> ACTIVO: {(estudiante.activo)? "SI":"NO"}</div>
                
                
                
    
        </div>)
    
    }

export default StudentList