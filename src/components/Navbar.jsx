
import {Link } from "react-router-dom"
function Navbar(){
    return (
        
<nav className="bg-white border-black border-2 px-2 sm:px-4 py-2.5 rounded dark:bg-[#737373]">
  <div className="container flex flex-wrap justify-between items-center mx-auto">
    <a >
        
        <span className="self-center text-xl font-bold italic whitespace-nowrap dark:text-white">UNIVERSIDAD SOPHOS SOLUTIONS</span>
    </a>
    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
      <span className="sr-only">Open main menu</span>
      <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      
        <li>
          <Link to="course-home"><button className="block py-2 pr-4 pl-3 text-white font-bold italic rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">CURSOS</button></Link>
        </li>
        <li>
          <Link to="teacher-home"><button className="block py-2 pr-4 pl-3 text-white font-bold italic rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">PROFESORES</button></Link>
        </li>
        <li>
          <Link to="student-home"><button href="#" className="block py-2 pr-4 pl-3 text-white font-bold italic rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">ESTUDIANTES</button></Link>
        </li>
       
      </ul>
    </div>
  </div>
</nav>

    )
}

export default Navbar