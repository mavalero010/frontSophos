//ENCONTRAR PROFESOR POR NOMBRE
import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react';
import axios from 'axios'
function FindTeacherByName(props){
    const [profesor,setProfesor]=useState({}); 
    const [nombre,setNombre]=useState(""); 
    const [apellido,setApellido]=useState(""); 
    return(
        <div className="text-black text-bold italic text-center pt-10"> 
        
        <label className="font-bold italic ">UNIVERSIDAD SOPHOS SOLUTIONS </label>
       <div className="bg-white mt-10 py-6 px-4  border-black">
           <div className="h-100 bg-[#737373] rounded-t-md border-2 border-black pt-10 pb-10 px-5">
              <div>
                 
                 <label className="font-extrabold italic text-white text-7xl">{props.nombre}</label>
                 <div className=" bg-[#D9D9D9] rounded-md border-2 border-black mt-20 mx-96">
                   <div>  <input className="mx-4 my-3 rounded-md border-black border-2 placeholder:text-[#737373] text-center"  placeholder="NOMBRE" id="nameTeacher" 
                              onChange={( event )=>{ 
                                setNombre(event.target.value);
                              
                              }} 

                        
                           />

                            <input className="mx-4 my-3 rounded-md border-black border-2 placeholder:text-[#737373] text-center"  placeholder="APELLIDO" id="LastnamTeacher" 
                              onChange={( event )=>{ 
                                setApellido(event.target.value);
                              
                              }} 

                        
                           />
                        <button  className="bg-white hover:bg-blue-500 text-black font-bold  px-4 border hover:text-white border-black rounded mb-3 mt-5"
                            onClick={( event )=>{ 
                                event.preventDefault();
                                if(!nombre || !apellido){
                                    alert(`DIGITE ID ${props.alert}`)
                                    return
                                }
                                axios.get(`${props.url}${props.nit}/${nombre}/${apellido}/`)
                                    .then(function (response) {
                                        
                                        setProfesor(response.data)
                                        console.log(profesor)
                                    })
                                    .catch(function (error) {
                                    console.log(error);
                                    })
                        
                                
        
                            }}
                        >Buscar</button>       
                    </div>
             <div className="my-3 mx-auto w-3/5 h-1/6" key= {profesor.id}>
                <form  className="bg-white items-center justify-center border-2 border-black font-bold italic text-black text-md" >
                <div className="text-decoration-line: underline py-1 text-md">{profesor.nombre} {profesor.apellido}</div>
                <div > ID: {profesor.id}</div>
                <div > AÑOS DE EXP: {profesor.años_docencia}</div>
                <div > MAX TITULO: {profesor.maximo_titulo_academico}</div>
                <div > ACTIVO: {(profesor.activo)? "Si":"No"}</div>
                <div > EMAIL: {profesor.email}</div>
                <div > DIR: {profesor.direccion}</div>
                <div > TEL: {profesor.telefono}</div>
                <div className="pb-2"> NIT: {profesor.nit}</div>
                
                </form>
    
        </div>
                      
                  </div> 
              </div>
               <Link to="/admin-panel/teacher-home"><button className="bg-white hover:bg-red-500 hover:text-white text-black font-bold py-2 px-4 border border-black rounded mb-3 mt-5" >Volver</button></Link>
           </div>     
       </div>
   </div>
    )
}

export default FindTeacherByName