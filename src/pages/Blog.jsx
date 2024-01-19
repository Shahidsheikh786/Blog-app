import React from 'react'
import {useParams} from "react-router-dom"
import { useState, useEffect } from "react";
import Data from "../Data.js";

const Blog = () => {
  
  const {id} = useParams();
  console.log(id)
  
  const [itemData, setItemData] = useState(null);
  
  useEffect(()=>{
    Data.find((item)=>{
      if(item.id == id){
        console.log(item)
        setItemData(item)
      }
    })
  },[id])
  
  
  return (
    <div className="p-3">
   <img src={itemData?.imgUrl} className="aspect-video w-full object-cover
   rounded-lg"/>
   <h1 className="text-2xl font-bold text-center my-5"> {itemData?.title}</h1>
   <div className="text-[#d3ad00] flex justify-between p-3">
   <h1>Auther : <span className="font-bold">Shahid</span> </h1>
   <h1>1 day ago</h1>
   </div>
   
   <p className="text-lg ">
   {itemData?.discription}
   </p>
   
    </div>
  )
}

export default Blog