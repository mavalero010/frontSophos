//CURSOS APROBADOS POR ESTUDIANTE
import { Link } from 'react-router-dom'
import CourseList from './CourseList.jsx'
import { useState } from 'react';
function ApprovedCoursesByStudent(props){
    const [idStudent,setIdStudent]=useState(""); 
    let [id,setId]=useState("2"); 
    return(
        <div className="text-black text-center pt-10"> 
        
        <label className="font-bold italic text-4xl">UNIVERSIDAD SOPHOS SOLUTIONS </label>
       <div className="bg-white mt-10 py-6 px-4  border-black">
           <div className="h-100 bg-[#737373] rounded-t-md border-2 border-black pt-10 pb-10 px-5">
              <div>
                <input className="mx-4 rounded-md border-black border-2 placeholder:text-[#737373] text-center" placeholder={props.placeholder}
                            onChange={( event )=>{ 
                                setIdStudent(event.target.value);
                            
                            }} />
                <button className="bg-white hover:bg-blue-500 text-black font-bold  px-4 border hover:text-white border-black rounded mb-3 mt-5"
                onClick={( event )=>{
                    if(!idStudent){
                        alert("DIGITE CAMPO REQUERIDO")
                        return
                    }else{
                        setId(idStudent)
                    }
                }}
                >BUSCAR</button>
              </div>
               <div className="bg-white rounded-md border-2 border-black mt-20 flex flex-row flex-wrap">
                 <CourseList url={`${props.url}`} id={id} nit={props.nit}/>
                   
               </div>   
               <Link to="/admin-panel/course-home"><button className="bg-white hover:bg-red-500 hover:text-white text-black font-bold py-2 px-4 border border-black rounded mb-3 mt-5" >Volver</button></Link>
           </div>     
       </div>
   </div>
    )
}

export default ApprovedCoursesByStudent