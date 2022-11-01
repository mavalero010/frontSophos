//CURSOS MATRICULADOS POR ESTUDIANTE
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react';
import CourseList from './CourseList';
function RegisteredCourseByStudent(props){
    let [cursos,setCursos]=useState(<div/>); 
    const [criterio,setCriterio]=useState(""); 
    let [res,setRes]=useState({}); 


    return(
        <div className="text-black text-bold italic text-center pt-10"> 
        
        <label className="font-bold italic ">UNIVERSIDAD SOPHOS SOLUTIONS </label>
       <div className="bg-white mt-10 py-6 px-4  border-black">
           <div className="h-100 bg-[#737373] rounded-t-md border-2 border-black pt-10 pb-10 px-5">
              <div>
                 
                 <label className="font-extrabold italic text-white text-7xl">{props.nombre}</label>
                 <div className=" bg-[#D9D9D9] rounded-md border-2 border-black mt-20 mx-96 ">
                   <div  className="mx-4 my-3"> {props.variable}:  
                   <input className="mx-4 rounded-md border-black border-2 placeholder:text-[#737373] text-center"  placeholder={props.placeholder} id="idEstudiante" 
                              onChange={( event )=>{ 
                                setCriterio(event.target.value);
                              
                              }} 

                        
                           />
                        <button  className="bg-white hover:bg-blue-500 text-black font-bold  px-4 border hover:text-white border-black rounded mb-3 mt-5"
                            onClick={( event )=>{ 
                                event.preventDefault();
                                if(!criterio){
                                    alert(`DIGITE ${props.alert}`)
                                    return
                                }else{
                                    
                                        {console.log(`${props.url}${props.nit}/${criterio}/`)}
                                        axios.get(`${props.url}${props.nit}/${criterio}/`).then((response)=> {
                                            {console.log("RESPONSE: ",response.data)}
                                            setRes(response.data)
                                            if(!Object.keys(res).length){
                                                return (   
                                                    <div className=" my-3 mx-4 w-44 bg-[#D9D9D9] items-center justify-center border-2 border-black font-bold italic text-black text-md">
            
                                                    </div>)
                                            }
                                            }).catch(function (error) {
                                                console.log(error);
                                                })


                              setCursos(res.map((curso)=> {
                                    return (
                                         Course(curso)
                                    
                                    )
                                 }))

                                   
                                }
                            }}
                        >Buscar</button>       
                    </div>                    
                  </div> 
                  <div className="bg-white rounded-md border-2 border-black mt-20 flex flex-row flex-wrap">
                            {cursos}
                    </div>
              </div>
               <Link to="/admin-panel/course-home"><button className="bg-white hover:bg-red-500 hover:text-white text-black font-bold py-2 px-4 border border-black rounded mb-3 mt-5" >Volver</button></Link>
           </div>     
       </div>
   </div>
    )
}function Course(curso){
    return(
    
        <div className=" my-3 mx-4 w-44 bg-[#D9D9D9] items-center justify-center border-2 border-black font-bold italic text-black text-md"
            key= {curso.no_curso}>
                <div className="text-decoration-line: underline py-1 text-md">{curso.nombre_Materia}</div>
                <div > ID: {curso.id}</div>
                <div > #CRED: {curso.num_creditos}</div>
                <div className="pb-2"> #PRER: {curso.idPrerequisito}</div>
                
                
                
    
        </div>)
    
    }

export default RegisteredCourseByStudent