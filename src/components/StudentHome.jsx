//STUDENT HOME
//TEACHER HOME
import { Link } from 'react-router-dom'
import StudentList from './student_view/StudentList.jsx'
function StudentHome(){
    return (
        <div className="text-black text-center pt-10"> 
        
        <label className="font-bold italic text-4xl">UNIVERSIDAD SOPHOS SOLUTIONS </label>
       <div className="bg-white mt-10 py-6 px-4  border-black">
           <div className="h-100 bg-[#737373] rounded-t-md border-2 border-black pt-10 pb-10 px-5">

               <Link to="add-student">{ButtonStudent("AÑADIR ESTUDIANTE",'/images/SignoMas.png')}</Link>
               <Link to="find-student-by-id">{ButtonStudent("BUSCAR POR ID",'/images/LupaNumeral.png')}</Link>
               <Link to="find-student-by-name">{ButtonStudent("BUSCAR POR NOMBRE",'/images/LupaA.png')}</Link>
                <Link to="deactivate-student">{ButtonStudent("DESACTIVAR ESTUDIANTE",'/images/Equis.png')}</Link>
                <Link to="activate-student">{ButtonStudent("ACTIVAR ESTUDIANTE",'/images/Check.png')}</Link>
               {/*ButtonTeacher("CURSOS DISPONIBLES",'/images/Numeral.png')*/}
               <div className="bg-white rounded-md border-2 border-black mt-20 flex flex-row flex-wrap">
                 <StudentList/>
                   
               </div>   
               <Link to="/admin-panel"><button className="bg-white hover:bg-red-500 hover:text-white text-black font-bold py-2 px-4 border border-black rounded mb-3 mt-5" >Volver</button></Link>
           </div>     
       </div>
   </div>
    
)
}

function ButtonStudent(texto,img){
    return (
        <button className="bg-[#D9D9D9] border-2 border-black text-black m-5 p-4 rounded-3xl font-bold italic items-center h-40">
            <img className="h-20 items-center mx-auto" src={img} alt={texto}></img>
            <label className="items-center">
                {texto}
            </label>
        </button>    
    
    )
    }

export default StudentHome