//AÑADIR ESTUDIANTE
import { Link, useNavigate } from 'react-router-dom'
import { useState } from "react";
import axios from 'axios'
function AddStudent(props){
    const api= import.meta.env.VITE_API_URL 
    const [idStudent,setIdStudent]=useState("");
    const [nombre,setNombre]=useState("");
    const [apellido,setApellido]=useState("");
    const [num_creditos,setNumCreditos]=useState("");
    const [semestre_cursado,setSemestreCursado]=useState("");
    const [email,setEmail]=useState("");
    const [direction,setDirection]=useState("");
    const [tel,setTel]=useState("")
    const [facultad,setFacultad]=useState("")
    return (
        <div className="text-black text-bold italic text-center pt-10"> 
        
        <label className="font-bold italic ">UNIVERSIDAD SOPHOS SOLUTIONS </label>
       <div className="bg-white mt-10 py-6 px-4  border-black">
           <div className="h-100 bg-[#737373] rounded-t-md border-2 border-black pt-10 pb-10 px-5">
              <div>
                 
                 <label className="font-extrabold italic text-white text-7xl">AÑADIR ESTUDIANTE</label>
                 <div className="h-100 bg-[#D9D9D9] rounded-md border-2 border-black mt-20 mx-96 items">
                    <form>
                       <ul>
                          <li className="">
                           
                             <input className="mx-4 mt-3 rounded-md border-black border-2 placeholder:text-[#737373] text-center"  placeholder="ID ESTUDIANTE" id="idestudiante" 
                                onChange={( event )=>{ 
                                    setIdStudent(event.target.value);
  
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
                             <input className="mx-4 mt-3 rounded-md border-black border-2 placeholder:text-[#737373] text-center"  placeholder="NUMERO DE CREDITOS" id="numcred"
                             onChange={( event )=>{setNumCreditos(event.target.value);}}
                             />
                          </li>
                          <li>
                             <input className="mx-4 mt-3 rounded-md border-black border-2 placeholder:text-[#737373] text-center"  placeholder="SEMESTRE A CURSAR" id="sem"
                             onChange={( event )=>{setSemestreCursado(event.target.value);}}
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

                          <li className="">
                             <input className="mx-6 mt-3 rounded-md border-black border-2 placeholder:text-[#737373] text-center"  placeholder="TELEFONO" id="tel"
                             onChange={( event )=>{setTel(event.target.value);}}
                             /></li >

                        <li className="mb-3">
                             <input className="mx-6 mt-3 rounded-md border-black border-2 placeholder:text-[#737373] text-center"  placeholder="FACULTAD" id="faculty"
                             onChange={( event )=>{setFacultad(event.target.value);}}
                             /></li >
                       </ul>
  
                       <button className="bg-gray-500 hover:bg-[#FF8836] text-white font-bold py-2 px-4 border border-black rounded mb-3"
                          onClick={( event )=>{ 
                             event.preventDefault();
                                console.log(idStudent,",",nombre,",",apellido,"",num_creditos,"",semestre_cursado,",",email,",",direction,",",tel,",",facultad)
                             if(!idStudent || !nombre || !apellido || !num_creditos || !semestre_cursado || !email || !direction || !tel ||!facultad){
                                alert("DIGITE TODOS LOS CAMPOS")
                                return
                             }
                             axios.post(props.url, 
                             {
                                "id": idStudent,
                                "nombre": nombre,
                                "apellido": apellido,
                                "numero_de_creditos": num_creditos,
                                "semestre_cursado": semestre_cursado,
                                "email": email,
                                "direccion": direction,
                                "telefono": tel,
                                "activo": true,
                                "nit": props.nit,
                                "facultad": facultad
                            })
                              .then(function (response) {
                                alert(response.data);
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

export default AddStudent