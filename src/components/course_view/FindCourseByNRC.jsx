import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react';
import axios from 'axios'
function FindCourseByNRC(){
    const nit=10000
    const api= import.meta.env.VITE_API_URL 
    const [curso,setCurso]=useState({}); 
    const [nrc,setNrc]=useState({}); 
    return(
        <div className="text-black text-bold italic text-center pt-10"> 
        
        <label className="font-bold italic ">UNIVERSIDAD SOPHOS SOLUTIONS </label>
       <div className="bg-white mt-10 py-6 px-4  border-black">
           <div className="h-100 bg-[#737373] rounded-t-md border-2 border-black pt-10 pb-10 px-5">
              <div>
                 
                 <label className="font-extrabold italic text-white text-7xl">ENCONTRAR CURSO POR NRC</label>
                 <div className=" bg-[#D9D9D9] rounded-md border-2 border-black mt-20 mx-96">
                   <div> NRC:  <input className="mx-4 my-3 rounded-md border-black border-2 placeholder:text-[#737373] text-center"  placeholder="NRC CURSO" id="idcurso" 
                              onChange={( event )=>{ 
                                setNrc(event.target.value);
                              
                              }} 

                        
                           />
                        <button  className="bg-white hover:bg-blue-500 text-black font-bold  px-4 border hover:text-white border-black rounded mb-3 mt-5"
                            onClick={( event )=>{ 
                                event.preventDefault();
                                if(!nrc){
                                    alert("DIGITE NRC")
                                    return
                                }
                                axios.get(`${api}encontrar_curso/${nit}/${nrc}/`)
                                    .then(function (response) {
                                        
                                        setCurso(response.data)
                                        console.log(curso)
                                    })
                                    .catch(function (error) {
                                    console.log(error);
                                    })
                        
                                
        
                            }}
                        >Buscar</button>       
                    </div>
             <div className="my-3 mx-auto w-3/5 h-1/6" key= {curso.id}>
                <form  className="bg-white items-center justify-center border-2 border-black font-bold italic text-black text-md" >
                <div className="text-decoration-line: underline py-1 text-md">{curso.nombre_Materia}</div>
                <div > ID: {curso.id}</div>
                <div > NRC: {curso.no_curso}</div>
                <div > #CRED: {curso.num_creditos}</div>
                <div > CUPOS: {curso.cupos}</div>
                <div > ACTIVO: {(curso.activo)? "Si":"No"}</div>
                <div > #PRER: {curso.idPrerequisito}</div>
                <div className="pb-2"> IDPROF: {curso.idProfesor}</div>
                
                
                </form>
    
        </div>
                      
                  </div> 
              </div>
               <Link to="/admin-panel/course-home"><button className="bg-white hover:bg-red-500 hover:text-white text-black font-bold py-2 px-4 border border-black rounded mb-3 mt-5" >Volver</button></Link>
           </div>     
       </div>
   </div>
    )
}
export default  FindCourseByNRC