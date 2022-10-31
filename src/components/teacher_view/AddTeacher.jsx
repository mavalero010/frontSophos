//AÑADIR PROFESOR
import { Link, useNavigate } from 'react-router-dom'
import { useState } from "react";
import axios from 'axios'
function AddTeacher(props){
    const api= import.meta.env.VITE_API_URL 
    const [idTeacher,setIdTeacher]=useState("");
    const [nombre,setNombre]=useState("");
    const [apellido,setApellido]=useState("");
    const [añosdocencia,setAñosDocencia]=useState("");
    const [maxtitle,setMaxTitleAca]=useState("");
    const [email,setEmail]=useState("");
    const [direction,setDirection]=useState("");
    const [tel,setTel]=useState("")
 
    return(
        <div className="text-black text-bold italic text-center pt-10"> 
        
        <label className="font-bold italic ">UNIVERSIDAD SOPHOS SOLUTIONS </label>
       <div className="bg-white mt-10 py-6 px-4  border-black">
           <div className="h-100 bg-[#737373] rounded-t-md border-2 border-black pt-10 pb-10 px-5">
              <div>
                 
                 <label className="font-extrabold italic text-white text-7xl">AÑADIR PROFESOR</label>
                 <div className="h-100 bg-[#D9D9D9] rounded-md border-2 border-black mt-20 mx-96 items">
                    <form>
                       <ul>
                          <li className="">
                           
                             <input className="mx-4 mt-3 rounded-md border-black border-2 placeholder:text-[#737373] text-center"  placeholder="ID PROFESOR" id="idprofesor" 
                                onChange={( event )=>{ 
                                    setIdTeacher(event.target.value);
  
                                }} 
                             />
                           
                          </li>
                          <li>
                             <input className="mx-4 mt-3 rounded-md border-black border-2 placeholder:text-[#737373] text-center"  placeholder="NOMBRE" id="nombre"
                                onChange={( event )=>{ 
                                    setNombre(event.target.value);
  
                             }}                 
                 />
                          </li>
                          <li>
                             <input className="mx-4 mt-3 rounded-md border-black border-2 placeholder:text-[#737373] text-center"  placeholder="APELLIDO" id="apellido"
                                onChange={( event )=>{setApellido(event.target.value);}}
                             />
                          </li>
                        
                          <li>
                             <input className="mx-4 mt-3 rounded-md border-black border-2 placeholder:text-[#737373] text-center"  placeholder="AÑOS EN DOCENCIA" id="añosdocencia"
                             onChange={( event )=>{setAñosDocencia(event.target.value);}}
                             />
                          </li>
                          <li>
                             <input className="mx-4 mt-3 rounded-md border-black border-2 placeholder:text-[#737373] text-center"  placeholder="MAXIMO TÍTULO" id="maxtitulo"
                             onChange={( event )=>{setMaxTitleAca(event.target.value);}}
                             />
                          </li>
                          <li>
                             <input className="mx-4 mt-3 rounded-md border-black border-2 placeholder:text-[#737373] text-center"  placeholder="EMAIL" id="email"
                             onChange={( event )=>{setEmail(event.target.value);}}
                             />
                          </li>
                          <li >
                             <input className="mx-6 mt-3 rounded-md border-black border-2 placeholder:text-[#737373] text-center"  placeholder="DIRECCION" id="direccion"
                             onChange={( event )=>{setDirection(event.target.value);}}
                             /></li >

                          <li className="mb-3">
                             <input className="mx-6 mt-3 rounded-md border-black border-2 placeholder:text-[#737373] text-center"  placeholder="TELEFONO" id="tel"
                             onChange={( event )=>{setTel(event.target.value);}}
                             /></li >
                       </ul>
  
                       <button className="bg-gray-500 hover:bg-[#FF8836] text-white font-bold py-2 px-4 border border-black rounded mb-3"
                          onClick={( event )=>{ 
                             event.preventDefault();
                          
                             if(!idTeacher || !nombre || !apellido || !añosdocencia || !maxtitle || !email || !direction || !tel){
                                alert("DIGITE TODOS LOS CAMPOS")
                                return
                             }
                             axios.post(props.url, {"id":idTeacher,
                             "nombre":nombre,
                             "apellido":apellido,
                             "años_docencia":añosdocencia,
                             "maximo_titulo_academico":maxtitle,
                             "email":email,
                             "direccion":direction,
                             "telefono":tel,
                             "activo":true,
                             "nit":props.nit})
                              .then(function (response) {
                                alert("Profesor registrado");
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
               <Link to="/admin-panel/teacher-home"><button className="bg-white hover:bg-red-500 hover:text-white font-bold py-2 px-4 border border-black rounded mb-3 mt-3" >Volver</button></Link>
           </div>     
       </div>
   </div>
    )
}
export default AddTeacher