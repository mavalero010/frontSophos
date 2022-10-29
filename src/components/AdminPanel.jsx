
import NavBar from './Navbar.jsx'
import { useEffect, useState } from 'react';
import axios from 'axios'
function AdminPanel(props){
    const [universidad,setUniversidad]=useState({}); 
    axios.get(`${props.url}${props.nit}/`)
    .then(function (response) {
        setUniversidad(response.data)
        return
    })
    .catch(function (error) {
    console.log(error);
    })
    return(
        <div className="text-black mx-auto">
        <NavBar/>
    <form className="mx-auto ">
        <ul className="text-white text-3xl italic mx-auto">{universidad.nombre}</ul>   
        <ul className="text-white text-3xl italic">{universidad.nit}</ul>   
        <ul className="text-white text-3xl italic">{universidad.ciudad}</ul>   
        <ul className="text-white text-3xl italic">{universidad.pais}</ul>    
    </form>
    </div>
    )
}

export default AdminPanel