//LISTA DE PROFESORES

import axios from 'axios'
import { useEffect, useState } from 'react';
import Navbar from '../Navbar';

function TeacherList(params){
   
    <Navbar/>
    const api=import.meta.env.VITE_API_URL    
    const nit=10000
    const [profesores,setProfesores]=useState({})
    useEffect(function () {
        axios.get(`${api}profesores/${nit}/`)
            .then((response)=> {
                console.log("RESPONSE: ",response.data)
                setProfesores(response.data)
            })
    }, [])

    if(!Object.keys(profesores).length){
        return 
    }
    console.log(profesores)
    return profesores.map((profesor)=> {
               return (
                Teacher(profesor)
               
               )
            })
        
    

}

function Teacher(profesor){
    return(
    
        <div className=" my-3 mx-4 w-44 bg-[#D9D9D9] items-center justify-center border-2 border-black font-bold italic text-black text-xs"
            key= {profesor.id}>
                <div className="text-decoration-line: underline py-1 text-md text-2xl">{profesor.nombre} {profesor.apellido}</div>
                <div > ID: {profesor.id}</div>
                <div > AÑOS EN DOCENCIA: {profesor.años_docencia}</div>
                <div > TITULO: {profesor.maximo_titulo_academico}</div>
                <div > {profesor.email}</div>
                <div > TEL: {profesor.telefono}</div>
                <div className=""> ACTIVO: {(profesor.activo)? "SI":"NO"}</div>
                
                
                
    
        </div>)
    
    }

export default TeacherList