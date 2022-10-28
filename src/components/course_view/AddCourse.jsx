import { Link, useNavigate } from 'react-router-dom'
import { useState } from "react";
import axios from 'axios'
function AddCourse (){

   const api= import.meta.env.VITE_API_URL 
   const [idcurso,setIdCurso]=useState("");
   const [num_creditos,setNumCreditos]=useState("");
   const [cupos,setCupos]=useState("");
   const [nrc,setNrc]=useState("");
   const [materia,setMateria]=useState("");
   const [idprereq,setIdPrereq]=useState("");
   const [idprofesor,setIdProf]=useState("");

   const navigate=useNavigate()
    return(
      <div className="text-black text-bold italic text-center pt-10"> 
        
      <label className="font-bold italic ">UNIVERSIDAD SOPHOS SOLUTIONS </label>
     <div className="bg-white mt-10 py-6 px-4  border-black">
         <div className="h-100 bg-[#737373] rounded-t-md border-2 border-black pt-10 pb-10 px-5">
            <div>
               
               <label className="font-extrabold italic text-white text-7xl">AÑADIR CURSO</label>
               <div className="h-100 bg-[#D9D9D9] rounded-md border-2 border-black mt-20 mx-96 items">
                  <form>
                     <ul>
                        <li className="">
                         
                           <input className="mx-4 mt-3 rounded-md border-black border-2 placeholder:text-[#737373] text-center"  placeholder="ID CURSO" id="idcurso" 
                              onChange={( event )=>{ 
                                 setIdCurso(event.target.value);

                              }} 
                           />
                         
                        </li>
                        <li>
                           <input className="mx-4 mt-3 rounded-md border-black border-2 placeholder:text-[#737373] text-center"  placeholder="NUM CRED" id="num_creditos"
                              onChange={( event )=>{ 
                                 setNumCreditos(event.target.value);

                           }}                 
               />
                        </li>
                        <li>
                           <input className="mx-4 mt-3 rounded-md border-black border-2 placeholder:text-[#737373] text-center"  placeholder="CUPOS DISPONIBLES" id="cupos"
                              onChange={( event )=>{setCupos(event.target.value);}}
                           />
                        </li>
                      
                        <li>
                           <input className="mx-4 mt-3 rounded-md border-black border-2 placeholder:text-[#737373] text-center"  placeholder="NRC" id="nrc"
                           onChange={( event )=>{setNrc(event.target.value);}}
                           />
                        </li>
                        <li>
                           <input className="mx-4 mt-3 rounded-md border-black border-2 placeholder:text-[#737373] text-center"  placeholder="MATERIA" id="materia"
                           onChange={( event )=>{setMateria(event.target.value);}}
                           />
                        </li>
                        <li>
                           <input className="mx-4 mt-3 rounded-md border-black border-2 placeholder:text-[#737373] text-center"  placeholder="ID CURSO PRERREQ" id="idprereq"
                           onChange={( event )=>{setIdPrereq(event.target.value);}}
                           />
                        </li>
                        <li className="mb-3">
                           <input className="mx-6 mt-3 rounded-md border-black border-2 placeholder:text-[#737373] text-center"  placeholder="ID PROFESOR" id="idprofesor"
                           onChange={( event )=>{setIdProf(event.target.value);}}
                           />
                        {console.log("ID: ",idcurso,"NRC: ",nrc,"MATERIA: ",materia)}</li >
                     </ul>

                     <button className="bg-gray-500 hover:bg-[#FF8836] text-white font-bold py-2 px-4 border border-black rounded mb-3"
                        onClick={( event )=>{ 
                           event.preventDefault();
                           if(!idcurso || !num_creditos || !cupos || !num_creditos || !nrc || !materia || !idprereq || !idprofesor){
                              alert("DIGITE TODOS LOS CAMPOS")
                              return
                           }
                           axios.post('http://localhost:8080/agregar_curso/', {
                              "id": idcurso,
                              "nombre_materia": materia,
                              "id_curso_prerrequisito": idprereq,
                              "num_creditos": num_creditos,
                              "cupos": cupos,
                              "nit":10000,
                              "activo":true,
                              "no_curso": nrc,
                              "id_profesor":idprofesor
                            })
                            .then(function (response) {
                              alert(response);
                            })
                            .catch(function (error) {
                              console.log(error);
                            })

                           

                     }}
                     >AÑADIR
                        
                     </button>
                  </form>
                    
                </div> 
            </div>
             <Link to="/admin-panel/course-home"><button className="bg-white hover:bg-red-500 hover:text-white font-bold py-2 px-4 border border-black rounded mb-3 mt-3" >Volver</button></Link>
         </div>     
     </div>
 </div>
    );

   
   }
   
   export default AddCourse;