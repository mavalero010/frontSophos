//ENCONTRAR CURSO POR NOMBRE

import Course from './Course';
function FindCourseByName(props){
    return(
        <Course url={`${props.url}${props.nit}`} nombre={props.nombre} placeholder={props.placeholder} alert={props.alert}/>
    )
}

export default FindCourseByName