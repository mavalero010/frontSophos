
import { Link,useNavigate} from "react-router-dom"
import axios from 'axios'
import { useEffect, useState } from 'react';
function LoginPage(){

    const api=import.meta.env.VITE_API_URL    
    const [nit,setNit]=useState("");
    const navigate=useNavigate()
    let res=false
    axios.get(`${api}encontrar_universidad/${nit}/`)
    .then((response)=> {
        console.log("RESPONSE: ",response.data)
        if(!response.data){
            console.log("UNIVERSIDAD NO ENCONTRADA")
            return
        }else{
            res=true
        }
    }).catch(function (error) {
        console.log(error);
        })
    return(   
        
    <div className="h-screen">
        <div className="container h-full">

            <div className="flex flex-col justify-center items-center h-full">
                <h1 className="mb-4 py-2 px-4 bg-white rounded-xl font-bold italic text-[#737373]">
                UNIVERSIDAD SOPHOS SOLUTIONS
                </h1>
                <form className="flex flex-col gap-6">
                    
                    <img className="w-80 mx-auto" src="/images/UniSophosLogo.png" alt="Logo" />
                    <input className="block mx-auto mb-4 py-2 px-4 bg-white rounded-xl w-full text-center placeholder:text-[#737373]" placeholder="INGRESE NIT DE UNIVERSIDAD" id="nit"
                        onChange={( event )=>{ 
                            setNit(event.target.value);

                        }} 
                    
                    />
                
                    <button to="/admin-panel" className="block mx-auto py-2 px-4 bg-white rounded-xl" 
                    onClick={( event )=>{ 
                        event.preventDefault();
                        if(!nit){
                            alert("INGRESE UN NIT VALIDO")
                            return
                        }else{
                            if(res==false){
                                alert("UNIVERSIDAD NO ENCONTRADA")
                                return
                            }
                        }
 
                        navigate("/admin-panel")
                        

                    }} 
                    > INGRESAR <i className="fa fa-arrow-circle-right text-xl" aria-hidden="true"></i></button>
                </form>
            </div>
        </div>
    </div>
    
    );
}

export default LoginPage;