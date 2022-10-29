//CURSAR CURSO
import { Link } from 'react-router-dom'
import CourseList from './CourseList.jsx'
import { useState } from 'react';
import axios from 'axios'
function ChekingCourse(props){
    const [idStudent,setIdStudent]=useState(""); 
    const [idCourse,setIdCourse]=useState(""); 
return (
    <div className="text-black text-center pt-10"> 
        
    <label className="font-bold italic text-4xl">UNIVERSIDAD SOPHOS SOLUTIONS </label>
   <div className="bg-white mt-10 py-6 px-4  border-black">
       <div className="h-100 bg-[#737373] rounded-t-md border-2 border-black pt-10 pb-10 px-5">
          <div>
            <input className="mx-4 rounded-md border-black border-2 placeholder:text-[#737373] text-center" placeholder="ID ESTUDIANTE"
                        onChange={( event )=>{ 
                            setIdStudent(event.target.value);
                        
                        }} />
            <input className="mx-4 rounded-md border-black border-2 placeholder:text-[#737373] text-center" placeholder="ID CURSO"
            onChange={( event )=>{ 
                setIdCourse(event.target.value);
            
            }} />
            <button className="bg-white hover:bg-blue-500 text-black font-bold  px-4 border hover:text-white border-black rounded mb-3 mt-5"
            onClick={( event )=>{
                if(!idStudent || !idCourse){
                    alert("DIGITE CAMPOS REQUERIDOS")
                    return
                }
                axios.put(`${props.url}${props.nit}/${idStudent}/${idCourse}/`,
                {
                    
                })
                  .then(function (response) {
                    alert(response);
                  })
                  .catch(function (error) {
                    console.log(error);
                  })
            }}
            >CURSAR</button>
          </div>
  
           <Link to="/admin-panel/course-home"><button className="bg-white hover:bg-red-500 hover:text-white text-black font-bold py-2 px-4 border border-black rounded mb-3 mt-5" >Volver</button></Link>
       </div>     
   </div>
</div>
)
}
export default ChekingCourse