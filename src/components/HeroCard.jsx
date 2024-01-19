import React from 'react'

const HeroCard = () => {
  return (
    <div className="flex flex-col items-center relative">
    <div className=" flex felx-col   translate-y-[7vw] flex flex-col items-center">
    <h1 className="text-[2vw]">React + Tailwind</h1>
    <h1 className=" text-[8vw] ">BLOG </h1>
    
    </div>
    <img src="/images09.jpeg" className="w-full h-[40vw]
    object-cover"/>
    
    </div>
  )
}
export default HeroCard