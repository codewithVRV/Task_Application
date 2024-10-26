
// import { Link } from "react-router-dom";
// import "./Header.css";

// import Sidebarcomp from "../Sidebar/Sidebar";
// import { useContext, useState } from "react";
// import UserContext from "../../contex/user";
// import InputSearch from "../../contex/searchtext";
// import ScrollProgressBar from "../ScrollBar/Scrollbar";

function Header() {

//   const [isOpen, setIsOPen] = useState(false)
//   const {inputData, setInputData} =  useContext(InputSearch)
  
//   const {userData, setUserData} = useContext(UserContext)


  return (
    <>
      <header className="bg-black sticky top-0 z-50">
      <nav className="px-4 py-4 flex justify-between items-center">
        {/* Left Part */}
        <div className="flex gap-8 items-center"  data-aos="fade-right"> 
          <div>
            <p href="/" className="text-xl font-bold text-white cursor-pointer" >Blog <span className="text-orange-500">Post</span></p>
          </div>
          <div>
          <input
            type="text"
            // onChange={(e) => setInputData(e.target.value)}
            placeholder="Enter Post title"
            className="inp border border-gray-300 rounded-md py-2 px-4 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          />
          </div>
        </div>


        {/* Middle Part */}

        <div className=" text-white gap-10 text-xl hidden lg:flex">
          <a to={"/"} className="hover:text-orange-500"  data-aos="flip-up">Home</a>
          <a to={"/"} className="hover:text-orange-500"   data-aos="flip-down">About</a>
          <a to={"/"} className="hover:text-orange-500"  data-aos="flip-up">Service</a>
          <p className="hover:text-orange-500"  data-aos="flip-down">Contact</p>
        </div>




        {/* Last Part */}


        <div className="text-white  gap-4 items-center  hidden lg:flex"  data-aos="fade-left">
          {/* {
            (userData.username.length == 0) ? <a to={"/signin"} className="px-4 py-2 bg-orange-500 rounded-md">Login</a>
            : ""
          } */}
          <a to={"/signup"} className="px-4 py-2 bg-orange-500 rounded-md">Signup</a>
        </div>
        {/* <i className="fa-solid block icon fa-bars text-2xl text-white lg:hidden"></i> */}
        <a to={"/signup"} className="px-4 py-2 text-white bg-orange-500 rounded-md lg:hidden">Signup</a>


      </nav>
      {/* <div id="bb"></div> */}
    {/* <ScrollProgressBar/> */}
    </header>

          {/* {
            (isOpen) ? <Sidebarcomp handleSidebar={() => setIsOPen(!isOpen)}/> : ""
          } */}

    </>
  )
}

export default Header;