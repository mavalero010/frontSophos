const Footer = () => {
    return (
      <div className="h-96 bg-dark-900">
        <div className="container mx-auto py-8 h-full">
          <div className="flex flex-col items-center h-full justify-center">
            <div className="w-full">
              <img src="/logo.png" className="mx-auto w-full max-w-[200px] md:max-w-[250px] md:w-[250px]"/>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-4 mt-4 mb-2 text-white">
              <a>Terms of Use</a>
              <a>Privacy Policy</a>
              <a>FAQ</a>
            </div>
            <div className="flex gap-4 mt-2">
              <i className="fa fa-facebook text-white" aria-hidden="true"></i>
              <i className="fa fa-twitter text-white" aria-hidden="true"></i>
              <i className="fa fa-instagram text-white" aria-hidden="true"></i>
              <i className="fa fa-youtube text-white" aria-hidden="true"></i>
            </div>
            <div className="text-white text-sm mt-4">©{new Date().getFullYear()} - All rights reserved</div>
          </div>
        </div>
      </div>
    )
  }
  
  export default Footer