
import {Link} from "react-router-dom";

import { HiXMark } from "react-icons/hi2";
import { RiMenu2Fill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from
"react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import { FaPinterest } from "react-icons/fa";


const SideBar = ({setOpenSidebar}) => {
  
  const closeSideBar = () =>{
    setOpenSidebar(false)
  }
  
  return (
    <div>
    <div className="h-[100vh] bg-[#23232389] w-[100%] fixed top-0 left-0 z-[2]"
    onClick={()=>setOpenSidebar(false)}></div>
   
    <div className="bg-white fixed top-0 left-0 h-[100vh] w-[50%] z-[3]">
    
    <HiXMark className="absolute top-2 right-2"
    onClick={()=>setOpenSidebar(false)}/>
    
   
    <div className="p-2">
      <ul className="mt-7 text-lg">
   <Link to="/" onClick={closeSideBar} > <li>Home</li> </Link>
   <Link to="/addblog" onClick={closeSideBar}> <li>Write</li> </Link>
    <li>LogOut</li>
    </ul>
    
     <ul className="flex gap-3 mt-2">
    <li><FaInstagram/></li>
    <li><FaFacebook/></li>
    <li><FaLinkedin/></li>
    <li><FaPinterest/></li>
    </ul>
    </div>
   
    
    </div>
    
    </div>
    )
}

export default SideBar