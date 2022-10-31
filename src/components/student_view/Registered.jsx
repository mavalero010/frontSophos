//MATRICULA
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios'
function Registered(props){
    const [idStudent,setIdStudent]=useState(""); 
    const [noCourse,setNoCourse]=useState(""); 
    const [idTeacher,setIdTeacher]=useState(""); 

    function matricularEstudiante( event ) {   
      event.preventDefault();
      if(!noCourse || !idStudent || !idTeacher){
          alert(`DIGITE LOS CAMPOS REQUERIDOS`)
          return
      }
      axios.post(`${props.url}${props.nit}/${noCourse}/${idTeacher}/${idStudent}/`)
          .then(function (response) {
            console.log(response)
            alert(response.data)            
          })
          .catch(function (error) {
            console.log(error);
          })

      
    }
    return(
        <div className="text-black text-bold italic text-center pt-10"> 
        
        <label className="font-bold italic ">UNIVERSIDAD SOPHOS SOLUTIONS </label>
       <div className="bg-white mt-10 py-6 px-4  border-black">
           <div className="h-100 bg-[#737373] rounded-t-md border-2 border-black pt-10 pb-10 px-5">
              <div>
                 
                 <label className="font-extrabold italic text-white text-7xl">{props.nombre}</label>
                 <div className=" bg-[#D9D9D9] rounded-md border-2 border-black mt-20 mx-96">
                   <div> <input className="mx-4 my-3 rounded-md border-black border-2 placeholder:text-[#737373] text-center"  placeholder={props.phstudent} id="idstudent" 
                              onChange={( event )=>{ 
                                setIdStudent(event.target.value);
                              
                              }} 

                        
                           />

                            <input className="mx-4 my-3 rounded-md border-black border-2 placeholder:text-[#737373] text-center"  placeholder={props.phcourse} id="nocurso" 
                              onChange={( event )=>{ 
                                setNoCourse(event.target.value);
                              
                              }}
                           />
                            <input className="mx-4 my-3 rounded-md border-black border-2 placeholder:text-[#737373] text-center"  placeholder={props.phteacher} id="idteacher" 
                              onChange={( event )=>{ 
                                setIdTeacher(event.target.value);
                              
                              }}/>
                           
                        <button  className="bg-white hover:bg-blue-500 text-black font-bold  px-4 border hover:text-white border-black rounded mb-3 mt-5"
                            onClick={matricularEstudiante}
                        >Matricular</button>       
                    </div>
       
                      
                  </div> 
              </div>
               <Link to="/admin-panel/student-home"><button className="bg-white hover:bg-red-500 hover:text-white text-black font-bold py-2 px-4 border border-black rounded mb-3 mt-5" >Volver</button></Link>
           </div>     
       </div>
   </div>      

    )
}
export default Registered