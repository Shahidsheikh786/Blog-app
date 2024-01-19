
import React from 'react'
import Data from "../Data.js"
import {useParams} from "react-router-dom"
import { useState, useEffect } from "react";
import BlogCard from "../components/BlogCard.jsx" 


const Search = () => {
  const {searchTerm} = useParams()
  console.log(searchTerm)
  
  const [searchData, setSearchData] = useState([]);
  
  useEffect(() => {
   setSearchData(Data.filter((element) =>
  element.title.toLowerCase().includes(searchTerm.toLowerCase())))
  }, [searchTerm]);
  
  console.log(searchData)
  return (
    <>
    
    <h1 className="m-4">results of <span className="font-bold">{searchTerm}</span></h1>
    <div className=" flex justify-center flex-wrap">
    
    {searchData.length == 0 ? <div>No results available</div> :
       searchData.map((item,i)=>{
    return (
      <BlogCard item={item}/>
      )
  })
    }
    </div>
    </>
  )
}

export default Search