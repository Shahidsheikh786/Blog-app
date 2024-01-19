import React from 'react'
import { useState } from "react";
import SideBar from "./SideBar";


// dom 
import {Link,useNavigate} from "react-router-dom"

// icons
import { HiXMark } from "react-icons/hi2";
import { RiMenu2Fill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from
"react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import { FaPinterest } from "react-icons/fa";

const Header = () => {
  const [openSearch, setOpenSearch] = useState(false);
  const [openSidebar, setOpenSidebar] = useState(false);
  const [searchTerm,setSearchTerm] = useState("")
  
  const navigate = useNavigate();
  
  const search = () =>{
    if(searchTerm == ""){
      alert('input is empty')
      return;
    }
    navigate(`search/${searchTerm}`)
    setSearchTerm('')
    scrollTo(0,0)
  }
  
  return (
    <div className="sticky top-0 left-0 bg-white z-10">
    <div className="border justify-between flex p-2 text-xl items-center
    h-[70px] ">
  
    <div className="flex gap-3 items-center">
    <RiMenu2Fill onClick={()=>setOpenSidebar(true)} className="md:hidden"/>
    <ul className="hidden md:flex gap-3">
    <li><FaInstagram/></li>
    <li><FaFacebook/></li>
    <li><FaLinkedin/></li>
    <li><FaPinterest/></li>
    </ul>
  
    </div>
    
    
    <ul className=" hidden md:flex gap-3 ">
    <li><Link to="/">Home</Link></li>
    <li><Link to="/addblog">Write</Link></li>
    <li>About</li>
    <li>Contact</li>
    <li>LogOut</li>
    </ul>
    
    <div className="flex gap-3 h-10 items-center ">
    <img src="/blog-1.jpeg" className="h-8 w-8
    rounded-full"/>
     <IoMdSearch onClick={()=> setOpenSearch(true)}/>

    </div>
    </div>
    
    {openSearch ? <div className="w-full p-3 flex rounded-lg relative">
    <IoMdSearch className="absolute top-6 left-4 text-[#8e8e8e] text-lg"/>
    
    <input className="border w-full p-2 pl-6 rounded-xl" placeholder="Search for blogs "
    onChange={(e)=>setSearchTerm(e.target.value)} 
    onKeyPress={()=>{search()}}
    value={searchTerm}
    
    />
    <i className="absolute right-5 top-5 text-2xl" onClick={()=>
    setOpenSearch(false)}><HiXMark/></i>
    </div> : ""}
    
    {openSidebar ? <SideBar setOpenSidebar={setOpenSidebar}/> : "" }
 
    </div>
  )
}

export default Header