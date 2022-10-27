function Course(curso){
return(

    <div className="my-3 mx-4"
        key={curso.id}>
            <form className="bg-[#D9D9D9] items-center justify-center flex flex-col border-2 border-black w-40 font-bold italic text-black text-xs" >
            <div className="text-decoration-line: underline py-1 text-md">{curso.nombre} {curso.apellido}</div>
            <div > ID:{curso.id}</div>
            <div > #CRED:{curso.numero_de_creditos}</div>
            <div > SEMESTRE:{curso.semestre_cursado}</div>
            <div > {curso.email}</div>
            <div > DIR:{curso.direccion}</div>
            <div > ACTIVO:{(curso.activo)? "Si":"No"}</div>
            <div > FACUTLTAD:{curso.facultad}</div>
            
            </form>

    </div>)

}
export default Course()