import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react';
import axios from 'axios'
import Course from './Course';
function FindCourseByNRC(props){
    return(
      
        <Course url={`${props.url}${props.nit}`} nombre={props.nombre} placeholder={props.placeholder} alert={props.alert}/>
    )
}
export default  FindCourseByNRC