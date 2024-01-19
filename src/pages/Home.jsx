import React from 'react'
import HeroCard from "../components/HeroCard"
import BlogCard from "../components/BlogCard"
import Data from "../Data.js"

const Home = () => {
  return (
    <div>
    <HeroCard/>
    <div className="flex flex-wrap justify-center my-4">
      {Data.map((item)=>{
      return <BlogCard item={item}/>
    })}
    </div>
    </div>
  )
}

export default Home