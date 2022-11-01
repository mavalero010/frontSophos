//ENCONTRAR ESTUDIANTE POR ID
import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react';
import axios from 'axios'
function FindStudentByID(props){
    const [estudiante,setEstudiante]=useState({}); 
    const [id,setId]=useState(""); 
    return(<div>
        <div className="text-black text-bold italic text-center pt-10"> 
        
        <label className="font-bold italic ">UNIVERSIDAD SOPHOS SOLUTIONS </label>
       <div className="bg-white mt-10 py-6 px-4  border-black">
           <div className="h-100 bg-[#737373] rounded-t-md border-2 border-black pt-10 pb-10 px-5">
              <div>
                 
                 <label className="font-extrabold italic text-white text-7xl">{props.nombre}</label>
                 <div className=" bg-[#D9D9D9] rounded-md border-2 border-black mt-20 mx-96">
                   <div>  <input className="mx-4 my-3 rounded-md border-black border-2 placeholder:text-[#737373] text-center"  placeholder="NOMBRE" id="nameStudent" 
                              onChange={( event )=>{ 
                                setId(event.target.value);
                              
                              }} 

                        
                           />

                        <button  className="bg-white hover:bg-blue-500 text-black font-bold  px-4 border hover:text-white border-black rounded mb-3 mt-5"
                            onClick={( event )=>{ 
                                event.preventDefault();
                                if(!id){
                                    alert(`DIGITE ID DE ${props.alert}`)
                                    return
                                }
                                axios.get(`${props.url}${props.nit}/${id}/`)
                                    .then(function (response) {
                                        
                                        setEstudiante(response.data)
                                        console.log(estudiante)
                                    })
                                    .catch(function (error) {
                                    console.log(error);
                                    })
                        
                                
        
                            }}
                        >Buscar</button>       
                    </div>
             <div className="my-3 mx-auto w-3/5 h-1/6" key= {estudiante.id}>
                <form  className="bg-white items-center justify-center border-2 border-black font-bold italic text-black text-md" >
                <div className="text-decoration-line: underline py-1 text-md">{estudiante.nombre} {estudiante.apellido}</div>
                <div > ID: {estudiante.id}</div>
                <div > AÑOS DE EXP: {estudiante.numero_de_creditos}</div>
                <div > MAX TITULO: {estudiante.semestre_cursado}</div>
                <div > ACTIVO: {(estudiante.activo)? "Si":"No"}</div>
                <div > EMAIL: {estudiante.email}</div>
                <div > DIR: {estudiante.direccion}</div>
                <div > TEL: {estudiante.telefono}</div>
                <div> FACULTAD: {estudiante.facultad}</div>
                <div className="pb-2"> NIT: {estudiante.nit}</div>
                
                </form>
    
        </div>
                      
                  </div> 
              </div>
               <Link to="/admin-panel/student-home"><button className="bg-white hover:bg-red-500 hover:text-white text-black font-bold py-2 px-4 border border-black rounded mb-3 mt-5" >Volver</button></Link>
           </div>     
       </div>
   </div>
    </div>)
}

export default FindStudentByID