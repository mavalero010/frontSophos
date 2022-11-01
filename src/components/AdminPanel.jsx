
import NavBar from './Navbar.jsx'
import { useEffect, useState } from 'react';
import axios from 'axios'
function AdminPanel(props){
    const [universidad,setUniversidad]=useState({}); 

    useEffect(function () {
        axios.get(`${props.url}${props.nit}/`)
        .then(function (response) {
            setUniversidad(response.data)
            return
        })
        .catch(function (error) {
        console.log(error);
        })
        
    }, [])

    return(
        <div>
            <NavBar/>
    <div className="text-black h-screen flex flex-col  justify-center items-center bg-white">
        
    <div className="container h-full flex flex-col justify-center items-center bg-[#737373] my-20 border-4 border-black">
        <ul className="text-white text-3xl italic">{universidad.nombre}</ul>   
        <ul className="text-white text-3xl italic">NIT: {universidad.nit}</ul>   
        <ul className="text-white text-3xl italic">{universidad.ciudad}</ul>   
        <ul className="text-white text-3xl italic">{universidad.pais}</ul>    
    </div>
    </div>
        </div>
    )
}

export default AdminPanel