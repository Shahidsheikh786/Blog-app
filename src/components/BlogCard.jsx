
import React from 'react'
// dom 
import {Link} from "react-router-dom"


const BlogCard = ({item}) => {
  return (
    <Link to={`/blog/${item?.id}`} onClick={()=>{window.scrollTo(0,0)}}>
    <div key={item?.id} className="w-[300px] flex flex-col items-center p-2 gap-3 justify-center">
    <img src={item?.imgUrl} className="h-[350px] w-full rounded-lg object-cover"/>
     <p className="flex gap-2">{item.tags.map((e,i)=>{return <div key={i}>{e}</div>})}</p>
     
     
     <h1 className="font-bold  text-xl">{item?.title}
     </h1>
     <p>{item?.discription}</p>
    
    </div>
      </Link>  
  )
}

export default BlogCard