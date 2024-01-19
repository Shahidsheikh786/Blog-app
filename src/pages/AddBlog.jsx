import React from 'react'
import Data from "../Data.js"
import { useState, useEffect } from "react";
import {useNavigate} from "react-router-dom"
const AddBlog = () => {
  
  const navigate = useNavigate();
  
 const [form, setForm ] = useState({
   title: "",
   discription: "",
 });
 
 const addNewBlog = () =>{
   
   if(form.title !== "" && form.discription !== ""){
    Data.push({
    id: Data.length +1 ,
    discription : form?.discription,
    title : form?.title,
    userName : "Shahid",
    imgUrl : "/blog-2.jpeg",
    uploadingDate : "10/3/2032",
    tags : ["life, nature"]
  
   })
   
   setForm({title : "" , discription: ''})
   navigate("/")
   alert('success')
   
   }else {
     alert('something want wrong')
   }
 }
 
  return (
    <div className="p-5">
   
  <label for="profileImg" className="relative"> 
  
  <img src="/blog-3.jpeg" className=" aspect-video w-full object-cover
  rounded-lg md:h-[20vh] brightness-50 relative"/ > 
  <div className=" absolute  top-[50%] translate-x-[50%] -translate-y-[50%]
  right-[50%] text-7xl text-white
  border p-1 px-2 rounded-full">+</div> 
  
  </label>
  
<input type="file" name="profileImg" id="profileImg"  className="hidden"/>
   
   <div >
   <input className="text-2xl font-bold  my-5 w-full p-2 text-center
   outline-none" 
   onChange={(e)=>{setForm({...form ,title : e.target.value});  console.log(form.title)}}
   value={form.title}
   placeholder="Title"/> 
   
<div class="relative w-full min-w-[200px]">
    <textarea
      className="w-full outline-none border-2 resize-none rounded-lg   p-3 text-lg" rows="10"
      placeholder="Tell your story" 
      onChange={(e)=>setForm({...form , discription : e.target.value})}
      value={form?.discription}>
      </textarea>
 
  </div>
   
   <div className="w-full my-5 flex justify-center"> 
   
   <button className="p-2
   bg-green-700 text-white rounded-lg " onClick={addNewBlog}>
   Publish Blog
   </button> </div>
 
   </div>
 
    </div>
  )
}

export default AddBlog